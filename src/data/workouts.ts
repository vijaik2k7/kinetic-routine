export type PhaseId = 1 | 2 | 3;
export type DayId = 'A' | 'B';

export interface ExercisePhaseInfo {
  name: string;
  sets: number;
  reps: string;
  rpe: string;
  rest: number;
}

export interface ExerciseStep {
  title: string;
  detail: string;
}

export interface Exercise {
  id: string;
  image: string;
  muscles: string[];
  cues: string[];
  steps: ExerciseStep[];
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
    steps: [
      { title: 'Setup & Bar Placement', detail: 'Position bar across upper traps. Stand tall with feet shoulder-width apart, toes pointed slightly outward (15–30°).' },
      { title: 'Hinge & Descent', detail: 'Inhale, brace core, and break at hips and knees simultaneously. Lower smoothly while tracking knees outward over toes.' },
      { title: 'Bottom Position', detail: 'Descend until hip crease is parallel to or slightly below knees. Maintain flat back and chest high.' },
      { title: 'Drive & Lockout', detail: 'Exhale and drive aggressively through midfoot and heels using quads and glutes to return to standing.' }
    ],
    phases: {
      1: { name: 'Barbell Back Squat (Technique)', sets: 3, reps: '8-10', rpe: '6-7', rest: 60 },
      2: { name: 'Barbell Back Squat (Hypertrophy)', sets: 3, reps: '6-8', rpe: '7-8', rest: 90 },
      3: { name: 'Paused Barbell Back Squat', sets: 4, reps: '4-6', rpe: '8-9', rest: 120 }
    }
  },
  {
    id: 'bench', image: 'bench.jpg', muscles: ['Chest', 'Triceps'], cues: ['Retract shoulder blades', 'Lower to lower sternum', 'Drive feet into floor', 'Maintain 45° elbow tuck'],
    steps: [
      { title: 'Setup & Arch', detail: 'Lie flat on bench, pull shoulder blades down and back into pad, and plant feet firmly flat on floor.' },
      { title: 'Unrack & Lockout', detail: 'Grip bar slightly wider than shoulder-width. Unrack directly over upper chest with wrists straight over vertical forearms.' },
      { title: 'Controlled Lowering', detail: 'Inhale deeply, lowering bar under control to touch lower sternum while keeping elbows tucked at a 45° angle.' },
      { title: 'Press & Finish', detail: 'Exhale, drive feet into floor, and press bar straight up and slightly back until arms are fully extended.' }
    ],
    phases: {
      1: { name: 'Barbell Bench Press (Technique)', sets: 3, reps: '8-10', rpe: '6-7', rest: 60 },
      2: { name: 'Barbell Bench Press (Hypertrophy)', sets: 3, reps: '6-8', rpe: '7-8', rest: 90 },
      3: { name: 'Heavy Barbell Bench Press', sets: 4, reps: '4-6', rpe: '8-9', rest: 120 }
    }
  },
  {
    id: 'row', image: 'row.jpg', muscles: ['Lats', 'Rhomboids'], cues: ['Hinge at hips with flat back', 'Pull with elbows back toward hips', 'Squeeze shoulder blades together', 'Control lowering phase'],
    steps: [
      { title: 'Hinge Setup', detail: 'Stand with feet hip-width apart. Hinge forward at hips with torso near parallel to floor and spine flat.' },
      { title: 'Scapular Retraction', detail: 'Grip bar overhand. Pull shoulder blades back together before flexing elbows.' },
      { title: 'Drive to Lower Ribs', detail: 'Drive elbows back toward hip pockets, pulling bar into lower ribcage/abdomen.' },
      { title: 'Squeeze & Lower', detail: 'Squeeze upper back at peak contraction for 1 second, then lower bar smoothly under control.' }
    ],
    phases: {
      1: { name: 'Bent-Over Barbell Row (Technique)', sets: 3, reps: '8-10', rpe: '6-7', rest: 60 },
      2: { name: 'Bent-Over Barbell Row (Hypertrophy)', sets: 3, reps: '8-10', rpe: '7-8', rest: 90 },
      3: { name: 'Pendlay Barbell Row', sets: 4, reps: '6-8', rpe: '8-9', rest: 120 }
    }
  },
  {
    id: 'rdl', image: 'rdl.jpg', muscles: ['Hamstrings', 'Glutes'], cues: ['Push hips back horizontally', 'Keep bar close to shins', 'Maintain flat back and soft knees', 'Drive hips forward to lockout'],
    steps: [
      { title: 'Stance & Soft Knees', detail: 'Stand tall holding bar at thighs. Set feet hip-width apart with knees unlocked ("soft knees").' },
      { title: 'Horizontal Hinge', detail: 'Push hips back as far as possible while keeping bar grazing close to legs and back flat.' },
      { title: 'Hamstring Stretch', detail: 'Lower until hamstrings are fully stretched (around mid-shin height) without rounding spine.' },
      { title: 'Hip Drive Lockout', detail: 'Drive hips forward to push back to standing, squeezing glutes hard at top lockout.' }
    ],
    phases: {
      1: { name: 'Barbell Romanian Deadlift (Light)', sets: 2, reps: '8-10', rpe: '6-7', rest: 60 },
      2: { name: 'Barbell Romanian Deadlift (Hypertrophy)', sets: 3, reps: '8-10', rpe: '7-8', rest: 90 },
      3: { name: 'Deficit Barbell RDL', sets: 3, reps: '6-8', rpe: '8-9', rest: 120 }
    }
  },
  {
    id: 'legraise', image: 'legraise.jpg', muscles: ['Core', 'Lower Abs'], cues: ['Depress shoulders and engage lats', 'Tilt pelvis backward before moving', 'Raise knees or legs without swinging', 'Exhale hard at top contraction'],
    steps: [
      { title: 'Dead Hang Setup', detail: 'Hang from pull-up bar with overhand grip. Pull shoulder blades down to stabilize shoulders.' },
      { title: 'Pelvic Engagement', detail: 'Tilt pelvis backward slightly to flatten lower lumbar curve and activate lower abs.' },
      { title: 'Controlled Raise', detail: 'Raise knees or legs up toward chest smoothly without using body momentum or swinging.' },
      { title: 'Squeeze & Lower', detail: 'Squeeze abs at top flexion, then lower legs under 2-3 second tempo back to dead hang.' }
    ],
    phases: {
      1: { name: 'Hanging Knee Raise (Foundation)', sets: 2, reps: '10-12', rpe: '6-7', rest: 45 },
      2: { name: 'Hanging Leg Raise (Overload)', sets: 3, reps: '10-12', rpe: '7-8', rest: 60 },
      3: { name: 'Weighted Hanging Leg Raise', sets: 3, reps: '8-10', rpe: '8-9', rest: 60 }
    }
  }
];

export const DAY_B_EXERCISES: Exercise[] = [
  {
    id: 'deadlift', image: 'deadlift.jpg', muscles: ['Glutes', 'Hamstrings', 'Back'], cues: ['Shins 1 inch from bar over midfoot', 'Pull slack out of bar before lifting', 'Push floor away with quad drive', 'Lock out tall without leaning back'],
    steps: [
      { title: 'Setup & Grip', detail: 'Stand with midfoot under bar, feet hip-width apart. Hinge down and take shoulder-width grip.' },
      { title: 'Wedge & Tension', detail: 'Drop hips, pull chest up, and pull slack out of bar until hamstrings and lats build tension.' },
      { title: 'Push the Floor', detail: 'Drive feet through floor using quad power until bar passes knees.' },
      { title: 'Hinge Lockout', detail: 'Drive hips forward into bar, squeezing glutes tightly at top without hyperextending back.' }
    ],
    phases: {
      1: { name: 'Conventional Deadlift (Technique)', sets: 3, reps: '6-8', rpe: '6-7', rest: 90 },
      2: { name: 'Conventional Deadlift (Hypertrophy)', sets: 3, reps: '5', rpe: '7-8', rest: 120 },
      3: { name: 'Heavy Conventional Deadlift', sets: 4, reps: '4-5', rpe: '8-9', rest: 180 }
    }
  },
  {
    id: 'ohp', image: 'ohp.jpg', muscles: ['Shoulders', 'Triceps'], cues: ['Squeeze glutes and brace core tight', 'Keep forearms strictly vertical', 'Press bar straight clearing forehead', 'Lock out directly over crown of head'],
    steps: [
      { title: 'Rack Setup', detail: 'Rest bar across front deltoids. Grip just outside shoulders with forearms vertical.' },
      { title: 'Rigid Pillar', detail: 'Squeeze glutes, lock knees, and brace abdominals to create a solid torso pillar.' },
      { title: 'Vertical Press', detail: 'Tilt head back slightly and press bar straight up close to face until clearing forehead.' },
      { title: 'Head Through & Lockout', detail: 'Push head forward under bar ("look through window") and lock elbows overhead.' }
    ],
    phases: {
      1: { name: 'Standing Barbell OHP (Technique)', sets: 3, reps: '8-10', rpe: '6-7', rest: 60 },
      2: { name: 'Standing Barbell OHP (Hypertrophy)', sets: 3, reps: '6-8', rpe: '7-8', rest: 90 },
      3: { name: 'Heavy Standing Barbell OHP', sets: 4, reps: '4-6', rpe: '8-9', rest: 120 }
    }
  },
  {
    id: 'pullup', image: 'pullup.jpg', muscles: ['Lats', 'Biceps'], cues: ['Start from full dead hang', 'Pull shoulder blades down first', 'Drive elbows down toward hip pockets', 'Touch upper chest to bar'],
    steps: [
      { title: 'Dead Hang', detail: 'Hang from bar with overhand grip wider than shoulders. Arms fully extended.' },
      { title: 'Scapular Depression', detail: 'Pull shoulder blades down and back to engage lats before bending elbows.' },
      { title: 'Drive Chest to Bar', detail: 'Drive elbows down toward ribs as you pull your upper chest to bar.' },
      { title: 'Controlled Lowering', detail: 'Pause at top, then lower smoothly back down to full dead hang.' }
    ],
    phases: {
      1: { name: 'Assisted / Bodyweight Pull-Up', sets: 3, reps: '6-8', rpe: '6-7', rest: 60 },
      2: { name: 'Bodyweight Pull-Up', sets: 3, reps: '6-8', rpe: '7-8', rest: 90 },
      3: { name: 'Weighted Pull-Up', sets: 4, reps: '4-6', rpe: '8-9', rest: 120 }
    }
  },
  {
    id: 'lunge', image: 'lunge.jpg', muscles: ['Quads', 'Glutes'], cues: ['Place rear foot securely on bench', 'Lower rear knee straight down vertically', 'Track front knee over middle toe', 'Drive through front heel to stand'],
    steps: [
      { title: 'Setup & Distance', detail: 'Stand 2 feet in front of bench. Place top of rear foot flat on bench with front foot planted.' },
      { title: 'Vertical Descent', detail: 'Keep torso upright and lower rear knee straight down toward floor under control.' },
      { title: 'Knee Tracking', detail: 'Ensure front knee stays aligned with middle toe and front thigh reaches parallel to floor.' },
      { title: 'Front Leg Drive', detail: 'Press firmly through front heel and midfoot to drive back up to top starting position.' }
    ],
    phases: {
      1: { name: 'Bulgarian Split Squats (Bodyweight)', sets: 2, reps: '8-10/leg', rpe: '6-7', rest: 60 },
      2: { name: 'Bulgarian Split Squats (Dumbbell)', sets: 2, reps: '8-10/leg', rpe: '7-8', rest: 90 },
      3: { name: 'Heavy Bulgarian Split Squats', sets: 3, reps: '6-8/leg', rpe: '8-9', rest: 90 }
    }
  },
  {
    id: 'plank', image: 'plank.jpg', muscles: ['Core', 'Transverse Abs'], cues: ['Elbows directly underneath shoulders', 'Posterior pelvic tilt (tuck tailbone)', 'Squeeze glutes and abdominals hard', 'Maintain straight line head to heels'],
    steps: [
      { title: 'Setup', detail: 'Place forearms flat on floor with elbows directly under shoulders, feet hip-width apart on toes.' },
      { title: 'Pelvic Lock', detail: 'Tuck tailbone slightly under into posterior pelvic tilt to flatten lower back and lock abs.' },
      { title: 'Total Body Tension', detail: 'Contract quads, squeeze glutes, and press forearms into floor.' },
      { title: 'Diaphragmatic Breath', detail: 'Maintain rigid posture while breathing steadily in through nose and out through mouth.' }
    ],
    phases: {
      1: { name: 'Forearm Plank (30s Hold)', sets: 2, reps: '30s hold', rpe: '6-7', rest: 30 },
      2: { name: 'Forearm Plank (45s Hold)', sets: 3, reps: '45s hold', rpe: '7-8', rest: 60 },
      3: { name: 'Weighted Forearm Plank', sets: 3, reps: '60s hold', rpe: '8-9', rest: 60 }
    }
  }
];
