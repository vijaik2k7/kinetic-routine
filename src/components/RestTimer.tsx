import { useState, useEffect } from 'react';
import { sounds } from '../utils/audio';

interface RestTimerProps {
  duration: number;
  onComplete: () => void;
}

export default function RestTimer({ duration, onComplete }: RestTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      sounds.playChime();
      onComplete();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const progress = ((duration - timeLeft) / duration) * 100;
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-50 bg-[var(--bg-app)] flex flex-col items-center justify-center" style={{ animation: 'fadeIn 0.3s ease-out' }}>
      <div className="relative w-80 h-80 flex flex-col items-center justify-center">
        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
          <circle
            cx="160"
            cy="160"
            r={radius}
            fill="transparent"
            stroke="var(--border-subtle)"
            strokeWidth="4"
          />
          <circle
            cx="160"
            cy="160"
            r={radius}
            fill="transparent"
            stroke="var(--accent)"
            strokeWidth="6"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
              transition: 'stroke-dashoffset 1s linear'
            }}
          />
        </svg>
        <div className="font-mono text-6xl text-[var(--text-primary)] z-10 tracking-tighter">
          {formatTime(timeLeft)}
        </div>
        <div className="font-mono text-sm text-[var(--text-secondary)] mt-2 z-10">
          REST
        </div>
      </div>

      <div className="flex gap-4 mt-12 z-10">
        {[30, 60, 90].map(t => (
          <button
            key={t}
            onClick={() => setTimeLeft(t)}
            className="w-16 h-12 rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)] font-mono text-sm hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors"
          >
            +{t}s
          </button>
        ))}
      </div>

      <button
        onClick={onComplete}
        className="mt-16 text-[var(--text-secondary)] font-sans text-lg underline underline-offset-4 hover:text-[var(--text-primary)] transition-colors"
      >
        Skip Rest
      </button>
    </div>
  );
}
