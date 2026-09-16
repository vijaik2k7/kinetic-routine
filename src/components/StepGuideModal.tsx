import { X } from 'lucide-react';
import { ExerciseStep } from '../data/workouts';

interface StepGuideModalProps {
  exerciseName: string;
  imageName: string;
  steps: ExerciseStep[];
  onClose: () => void;
}

export default function StepGuideModal({ exerciseName, imageName, steps, onClose }: StepGuideModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity">
      <div 
        className="w-full max-w-md bg-[var(--bg-app)] border border-[var(--border-subtle)] rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] transition-transform"
        style={{ animation: 'fadeIn 0.25s ease-out' }}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 flex items-start justify-between border-b border-[var(--border-subtle)] bg-[var(--bg-card)]/50">
          <div>
            <div className="font-mono text-[10px] tracking-widest text-[var(--accent)] uppercase font-semibold mb-1">
              Execution Guide
            </div>
            <h3 className="font-serif text-2xl text-[var(--text-primary)] font-medium">
              {exerciseName}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 -mr-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors rounded-full hover:bg-[var(--bg-card)]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Hero image preview in modal */}
        <div className="w-full h-36 bg-[var(--bg-card)] overflow-hidden flex-shrink-0 relative">
          <img 
            src={`${(import.meta as any).env.BASE_URL}exercises/${imageName}`} 
            alt={exerciseName}
            className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal opacity-90"
          />
        </div>

        {/* Steps List */}
        <div className="flex-grow overflow-y-auto px-6 py-5 space-y-5">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4 items-start group">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] font-mono text-xs text-[var(--accent)] font-semibold flex items-center justify-center mt-0.5 shadow-xs">
                0{idx + 1}
              </div>
              <div className="flex-grow">
                <h4 className="font-serif text-base font-semibold text-[var(--text-primary)] mb-1">
                  {step.title}
                </h4>
                <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-[var(--border-subtle)] bg-[var(--bg-card)]/30">
          <button
            onClick={onClose}
            className="w-full py-3 bg-[var(--text-primary)] text-[var(--bg-app)] font-sans font-medium text-sm rounded-full active:scale-[0.99] transition-transform"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
