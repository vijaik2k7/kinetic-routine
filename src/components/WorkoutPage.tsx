import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { PhaseId, DayId, DAY_A_EXERCISES, DAY_B_EXERCISES } from '../data/workouts';
import RestTimer from './RestTimer';
import { sounds } from '../utils/audio';

interface WorkoutPageProps {
  day: DayId;
  phase: PhaseId;
  restOverride: number;
  onFinish: () => void;
}

export default function WorkoutPage({ day, phase, restOverride, onFinish }: WorkoutPageProps) {
  const exercises = day === 'A' ? DAY_A_EXERCISES : DAY_B_EXERCISES;
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const exercise = exercises[currentIndex];
  const phaseInfo = exercise.phases[phase];
  
  const [completedSets, setCompletedSets] = useState<boolean[]>(new Array(phaseInfo.sets).fill(false));
  const [showRest, setShowRest] = useState(false);
  const [cueIndex, setCueIndex] = useState(0);

  useEffect(() => {
    setCompletedSets(new Array(phaseInfo.sets).fill(false));
  }, [currentIndex, phaseInfo.sets]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCueIndex(prev => (prev + 1) % exercise.cues.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [exercise]);

  const handleSetToggle = (index: number) => {
    const newSets = [...completedSets];
    if (!newSets[index]) {
      sounds.playTick();
      newSets[index] = true;
      setCompletedSets(newSets);
      
      const allDone = newSets.every(Boolean);
      if (!allDone) {
        setShowRest(true);
      }
    } else {
      newSets[index] = false;
      setCompletedSets(newSets);
    }
  };

  const allSetsCompleted = completedSets.every(Boolean);

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onFinish();
    }
  };

  const progressPct = ((currentIndex) / exercises.length) * 100;

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-[var(--bg-app)] relative overflow-hidden">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--border-subtle)] z-10">
        <div 
          className="h-full bg-[var(--accent)] transition-all duration-500 ease-out"
          style={{ width: `${progressPct}%` }}
        />
      </div>
      
      <header className="px-6 pt-8 pb-4 flex items-center justify-between z-10">
        <button onClick={onFinish} className="p-2 -ml-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
          <ArrowLeft size={20} />
        </button>
        <div className="font-mono text-xs text-[var(--text-secondary)]">
          Day {day} · Phase {phase} · {currentIndex + 1}/{exercises.length}
        </div>
        <div className="w-8" />
      </header>

      {/* Main Content */}
      <div className="flex-grow flex flex-col px-6 overflow-y-auto pb-24 relative">
        <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm mb-8 bg-[var(--bg-card)] flex-shrink-0">
          <img 
            src={`${(import.meta as any).env.BASE_URL}exercises/${exercise.image}`} 
            alt={phaseInfo.name}
            className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"
          />
        </div>

        <h2 className="text-4xl font-serif leading-tight mb-3 text-[var(--text-primary)]">
          {phaseInfo.name}
        </h2>
        
        <div className="flex items-center gap-3 mb-6">
          <div className="font-mono text-sm text-[var(--text-secondary)]">
            {phaseInfo.sets} sets × {phaseInfo.reps} · RPE {phaseInfo.rpe}
          </div>
          <div className="w-1 h-1 rounded-full bg-[var(--border-subtle)]" />
          <div className="text-xs px-2 py-1 bg-[var(--bg-card)] text-[var(--text-secondary)] rounded-md font-medium">
            {exercise.muscles.join(', ')}
          </div>
        </div>

        <div className="min-h-[3rem] mb-10 flex items-center">
          <p className="text-lg italic text-[var(--accent-sand)] transition-opacity duration-500">
            "{exercise.cues[cueIndex]}"
          </p>
        </div>

        <div className="mt-auto">
          <div className="flex justify-between items-center gap-4">
            {completedSets.map((isDone, i) => (
              <button
                key={i}
                onClick={() => handleSetToggle(i)}
                className={`flex-1 aspect-square rounded-full flex items-center justify-center transition-all ${
                  isDone 
                    ? 'bg-[var(--accent)] border-transparent scale-95 shadow-inner' 
                    : 'bg-transparent border-2 border-[var(--border-subtle)] hover:border-[var(--accent-sand)]'
                }`}
              >
                {isDone && <div className="w-2 h-2 rounded-full bg-white opacity-80" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {allSetsCompleted && (
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[var(--bg-app)] to-transparent via-[var(--bg-app)] flex justify-center pb-8 z-20">
          <button
            onClick={handleNext}
            className="w-full py-5 bg-[var(--text-primary)] text-[var(--bg-app)] font-sans font-medium text-lg rounded-full shadow-xl active:scale-[0.98] transition-transform"
          >
            {currentIndex < exercises.length - 1 ? 'Next Exercise →' : 'Complete Workout 🎉'}
          </button>
        </div>
      )}

      {showRest && (
        <RestTimer 
          duration={restOverride || phaseInfo.rest} 
          onComplete={() => setShowRest(false)} 
        />
      )}
    </div>
  );
}
