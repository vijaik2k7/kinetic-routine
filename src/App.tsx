import { useState, useEffect } from 'react';
import SetupPage from './components/SetupPage';
import WorkoutPage from './components/WorkoutPage';
import { PhaseId, DayId } from './data/workouts';

export default function App() {
  const [page, setPage] = useState<'setup' | 'workout'>('setup');
  
  const [day, setDay] = useState<DayId>(() => {
    const today = new Date().getDay();
    return (today === 2) ? 'A' : (today === 6 ? 'B' : 'A');
  });
  
  const [phase, setPhase] = useState<PhaseId>(1);
  const [restOverride, setRestOverride] = useState<number>(60);
  
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] font-sans transition-colors duration-300">
      {page === 'setup' ? (
        <SetupPage 
          day={day} 
          setDay={setDay} 
          phase={phase} 
          setPhase={setPhase} 
          restOverride={restOverride} 
          setRestOverride={setRestOverride}
          onStart={() => setPage('workout')}
          isDark={isDark}
          toggleDark={() => setIsDark(!isDark)}
        />
      ) : (
        <WorkoutPage 
          day={day} 
          phase={phase} 
          restOverride={restOverride}
          onFinish={() => setPage('setup')} 
        />
      )}
    </div>
  );
}
