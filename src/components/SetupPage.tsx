import { Moon, Sun } from 'lucide-react';
import { PhaseId, DayId, PHASES } from '../data/workouts';

interface SetupPageProps {
  day: DayId;
  setDay: (d: DayId) => void;
  phase: PhaseId;
  setPhase: (p: PhaseId) => void;
  restOverride: number;
  setRestOverride: (r: number) => void;
  onStart: () => void;
  isDark: boolean;
  toggleDark: () => void;
}

export default function SetupPage({ day, setDay, phase, setPhase, restOverride, setRestOverride, onStart, isDark, toggleDark }: SetupPageProps) {
  return (
    <div className="flex flex-col min-h-screen px-6 py-12 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-16">
        <div>
          <h1 className="text-5xl font-serif tracking-tight text-[var(--text-primary)]">
            Kinetic
            <div className="h-1 w-12 bg-[var(--accent)] mt-2 rounded-full"></div>
          </h1>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] mt-4">
            Twice-weekly compound strength
          </p>
        </div>
        <button onClick={toggleDark} className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
          {isDark ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>

      <div className="space-y-12 flex-grow">
        <section>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setDay('A')}
              className={`p-5 rounded-2xl text-left transition-all ${
                day === 'A' 
                  ? 'bg-[var(--accent)] text-white shadow-lg scale-105' 
                  : 'bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--border-subtle)]'
              }`}
            >
              <h3 className="font-mono text-xs opacity-80 mb-2">Tuesday</h3>
              <h2 className="font-serif text-2xl leading-tight mb-2">Day A</h2>
              <p className="text-sm opacity-90">Knee & Horizontal</p>
            </button>
            <button
              onClick={() => setDay('B')}
              className={`p-5 rounded-2xl text-left transition-all ${
                day === 'B' 
                  ? 'bg-[var(--accent)] text-white shadow-lg scale-105' 
                  : 'bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--border-subtle)]'
              }`}
            >
              <h3 className="font-mono text-xs opacity-80 mb-2">Saturday</h3>
              <h2 className="font-serif text-2xl leading-tight mb-2">Day B</h2>
              <p className="text-sm opacity-90">Hip & Vertical</p>
            </button>
          </div>
        </section>

        <section>
          <div className="flex gap-2 bg-[var(--bg-card)] p-1.5 rounded-full overflow-hidden">
            {PHASES.map(p => (
              <button
                key={p.id}
                onClick={() => setPhase(p.id)}
                className={`flex-1 py-3 px-2 rounded-full text-xs font-mono font-semibold transition-colors ${
                  phase === p.id 
                    ? 'bg-white text-[var(--text-primary)] shadow-sm dark:bg-[#2A2A27]' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-mono text-xs text-center text-[var(--text-secondary)] mb-4">REST INTERVAL</h3>
          <div className="flex justify-center gap-4">
            {[30, 60, 90, 120].map(time => (
              <button
                key={time}
                onClick={() => setRestOverride(time)}
                className={`w-14 h-14 rounded-full flex items-center justify-center font-mono text-sm transition-all ${
                  restOverride === time
                    ? 'bg-[var(--text-primary)] text-[var(--bg-app)]'
                    : 'border border-[var(--border-subtle)] text-[var(--text-secondary)]'
                }`}
              >
                {time}s
              </button>
            ))}
          </div>
        </section>
      </div>

      <button
        onClick={onStart}
        className="w-full mt-12 py-5 bg-[var(--accent)] text-white font-sans font-medium text-lg rounded-full shadow-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
      >
        Begin Workout <span>→</span>
      </button>

      <footer className="mt-8 text-center text-[10px] font-mono text-[var(--text-secondary)] opacity-50">
        Kinetic · Compound Hypertrophy & Strength
      </footer>
    </div>
  );
}
