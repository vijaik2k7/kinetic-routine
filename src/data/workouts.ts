export type PhaseId = 1 | 2 | 3;
export type DayId = 'A' | 'B';

export interface ExercisePhaseInfo {
  name: string;
  sets: number;
  reps: string;
  rpe: string;
  rest: number;
}

export interface Exercise {
  id: string;
  image: string;
  muscles: string[];
  cues: string[];
  phases: Record<PhaseId, ExercisePhaseInfo>;
}

export const PHASES = [
  { id: 1 as PhaseId, name: "Foundation", weeks: "Wk 1-4" },
  { id: 2 as PhaseId, name: "Overload", weeks: "Wk 5-8" },
  { id: 3 as PhaseId, name: "Strength", weeks: "Wk 9-12" }
];

export const DAY_A_EXERCISES: Exercise[] = [
  {
    id: 'squat', image: 'squat.jpg', muscles: ['Quads', 'Glutes'], cues: ['Break at hips and knees together', 'Drive knees out over toes', 'Push through full foot', 'Keep chest tall'],
    phases: {
      1: { name: 'Goblet Squats', sets: 3, reps: '8-10', rpe: '6-7', rest: 60 },
      2: { name: 'Barbell Back Squats', sets: 3, reps: '6-8', rpe: '7-8', rest: 90 },
      3: { name: 'Paused Back Squats', sets: 4, reps: '4-6', rpe: '8-9', rest: 120 }
    }
  },
  {
    id: 'bench', image: 'bench.jpg', muscles: ['Chest', 'Triceps'], cues: ['Retract shoulder blades', 'Lower to lower sternum', 'Drive feet into floor', 'Maintain 45° elbow tuck'],
    phases: {
      1: { name: 'DB Bench Press', sets: 3, reps: '8-10', rpe: '6-7', rest: 60 },
      2: { name: 'Barbell Bench Press', sets: 3, reps: '6-8', rpe: '7-8', rest: 90 },
      3: { name: 'Heavy Barbell Bench', sets: 4, reps: '4-6', rpe: '8-9', rest: 120 }
    }
  },
  {
    id: 'row', image: 'row.jpg', muscles: ['Lats', 'Rhomboids'], cues: ['Lead with elbows', 'Squeeze shoulder blades', 'Pause at peak contraction', 'Control the eccentric'],
    phases: {
      1: { name: 'Cable/Inverted Rows', sets: 3, reps: '8-10', rpe: '6-7', rest: 60 },
      2: { name: 'Chest-Supported DB Rows', sets: 3, reps: '8-10', rpe: '7-8', rest: 90 },
      3: { name: 'Pendlay Barbell Rows', sets: 4, reps: '6-8', rpe: '8-9', rest: 120 }
    }
  },
  {
    id: 'rdl', image: 'rdl.jpg', muscles: ['Hamstrings', 'Glutes'], cues: ['Push hips back horizontally', 'Keep bar close to legs', 'Maintain flat back', 'Drive hips forward to lockout'],
    phases: {
      1: { name: 'DB Romanian Deadlifts', sets: 2, reps: '8-10', rpe: '6-7', rest: 60 },
      2: { name: 'Barbell RDLs', sets: 3, reps: '8-10', rpe: '7-8', rest: 90 },
      3: { name: 'Deficit Barbell RDLs', sets: 3, reps: '6-8', rpe: '8-9', rest: 120 }
    }
  },
  {
    id: 'legraise', image: 'legraise.jpg', muscles: ['Core', 'Obliques'], cues: ['Engage core before moving', 'No swinging', 'Curl pelvis at top', 'Exhale on contraction'],
    phases: {
      1: { name: 'Cable Woodchops', sets: 2, reps: '12-15', rpe: '6-7', rest: 30 },
      2: { name: 'Hanging Leg Raises', sets: 2, reps: '12-15', rpe: '7-8', rest: 60 },
      3: { name: 'Weighted Leg Raises', sets: 3, reps: '10-12', rpe: '8-9', rest: 60 }
    }
  }
];

export const DAY_B_EXERCISES: Exercise[] = [
  {
    id: 'deadlift', image: 'deadlift.jpg', muscles: ['Glutes', 'Hamstrings', 'Back'], cues: ['Wedge hips to bar', 'Pull slack out first', 'Push floor away', 'Lock out without hyperextending'],
    phases: {
      1: { name: 'Trap-Bar Deadlifts', sets: 3, reps: '8-10', rpe: '6-7', rest: 60 },
      2: { name: 'Conventional Deadlifts', sets: 3, reps: '5', rpe: '7-8', rest: 120 },
      3: { name: 'Heavy Conventional DL', sets: 4, reps: '4-5', rpe: '8-9', rest: 180 }
    }
  },
  {
    id: 'ohp', image: 'ohp.jpg', muscles: ['Shoulders', 'Triceps'], cues: ['Squeeze glutes and brace', 'Press bar clearing forehead', 'Lock elbows overhead', 'Lower to collarbone'],
    phases: {
      1: { name: 'Seated DB OHP', sets: 3, reps: '8-10', rpe: '6-7', rest: 60 },
      2: { name: 'Standing Barbell OHP', sets: 3, reps: '6-8', rpe: '7-8', rest: 90 },
      3: { name: 'Heavy Standing OHP', sets: 4, reps: '4-6', rpe: '8-9', rest: 120 }
    }
  },
  {
    id: 'pullup', image: 'pullup.jpg', muscles: ['Lats', 'Biceps'], cues: ['Depress scapula first', 'Drive elbows to hip pockets', 'Pull chest to bar', 'Lower to dead hang'],
    phases: {
      1: { name: 'Lat Pulldowns', sets: 3, reps: '8-10', rpe: '6-7', rest: 60 },
      2: { name: 'Bodyweight Pull-Ups', sets: 3, reps: '6-8', rpe: '7-8', rest: 90 },
      3: { name: 'Weighted Pull-Ups', sets: 4, reps: '4-6', rpe: '8-9', rest: 120 }
    }
  },
  {
    id: 'lunge', image: 'lunge.jpg', muscles: ['Quads', 'Glutes'], cues: ['Elevate rear foot', 'Lower rear knee vertically', 'Track knee over middle toe', 'Push through front heel'],
    phases: {
      1: { name: 'DB Walking Lunges', sets: 2, reps: '8-10/leg', rpe: '6-7', rest: 60 },
      2: { name: 'Bulgarian Split Squats', sets: 2, reps: '8-10/leg', rpe: '7-8', rest: 90 },
      3: { name: 'Heavy Bulgarian SS', sets: 3, reps: '6-8/leg', rpe: '8-9', rest: 90 }
    }
  },
  {
    id: 'plank', image: 'plank.jpg', muscles: ['Core', 'Transverse Abs'], cues: ['Straight line head to heels', 'Tuck pelvis under', 'Squeeze glutes hard', 'Breathe steadily'],
    phases: {
      1: { name: 'Forearm Plank', sets: 2, reps: '30-45s hold', rpe: '6-7', rest: 30 },
      2: { name: 'Ab Wheel Rollouts', sets: 3, reps: '8-10', rpe: '7-8', rest: 60 },
      3: { name: 'Weighted Plank', sets: 3, reps: '45-60s hold', rpe: '8-9', rest: 60 }
    }
  }
];
