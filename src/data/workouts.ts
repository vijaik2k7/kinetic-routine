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
      { title: 'Setup & Stance', detail: 'Stand tall with feet shoulder-width apart, toes pointed slightly outward (15–30°). Brace your core and keep your chest elevated.' },
      { title: 'Hip Hinge & Descent', detail: 'Initiate the movement by breaking at your hips and knees simultaneously. Lower your body under control while tracking knees outward over your toes.' },
      { title: 'Bottom Position', detail: 'Descend until your hip crease is parallel with or slightly below your knees. Keep your back flat and weight balanced across your full foot.' },
      { title: 'Drive & Lockout', detail: 'Drive aggressively through the floor using your quads and glutes to return to standing. Squeeze glutes at full extension.' }
    ],
    phases: {
      1: { name: 'Goblet Squats', sets: 3, reps: '8-10', rpe: '6-7', rest: 60 },
      2: { name: 'Barbell Back Squats', sets: 3, reps: '6-8', rpe: '7-8', rest: 90 },
      3: { name: 'Paused Back Squats', sets: 4, reps: '4-6', rpe: '8-9', rest: 120 }
    }
  },
  {
    id: 'bench', image: 'bench.jpg', muscles: ['Chest', 'Triceps'], cues: ['Retract shoulder blades', 'Lower to lower sternum', 'Drive feet into floor', 'Maintain 45° elbow tuck'],
    steps: [
      { title: 'Setup & Arch', detail: 'Lie flat on the bench, pull your shoulder blades down and back into the pad, and plant both feet firmly onto the floor.' },
      { title: 'Unrack & Grip', detail: 'Unrack the weight directly over your upper chest with wrists straight and stacked over your elbows.' },
      { title: 'Controlled Lowering', detail: 'Inhale deeply and lower the weight under strict control to your lower sternum, keeping elbows tucked at a 45° angle.' },
      { title: 'Press & Finish', detail: 'Exhale as you drive through your feet and press the weight up and back toward your upper chest until your arms lock smoothly overhead.' }
    ],
    phases: {
      1: { name: 'DB Bench Press', sets: 3, reps: '8-10', rpe: '6-7', rest: 60 },
      2: { name: 'Barbell Bench Press', sets: 3, reps: '6-8', rpe: '7-8', rest: 90 },
      3: { name: 'Heavy Barbell Bench', sets: 4, reps: '4-6', rpe: '8-9', rest: 120 }
    }
  },
  {
    id: 'row', image: 'row.jpg', muscles: ['Lats', 'Rhomboids'], cues: ['Lead with elbows', 'Squeeze shoulder blades', 'Pause at peak contraction', 'Control the eccentric'],
    steps: [
      { title: 'Body Position', detail: 'Hinge at your hips with a flat spine or position your chest securely against the pad. Let your arms hang fully extended.' },
      { title: 'Scapular Retraction', detail: 'Initiate the movement by pulling your shoulder blades back together before your elbows begin to flex.' },
      { title: 'Drive Elbows Back', detail: 'Drive your elbows back toward your hip pockets, pulling the weight into your lower ribs or upper waist.' },
      { title: 'Squeeze & Return', detail: 'Pause for a split second to squeeze your upper back and lats, then lower the weight under control back to full extension.' }
    ],
    phases: {
      1: { name: 'Cable/Inverted Rows', sets: 3, reps: '8-10', rpe: '6-7', rest: 60 },
      2: { name: 'Chest-Supported DB Rows', sets: 3, reps: '8-10', rpe: '7-8', rest: 90 },
      3: { name: 'Pendlay Barbell Rows', sets: 4, reps: '6-8', rpe: '8-9', rest: 120 }
    }
  },
  {
    id: 'rdl', image: 'rdl.jpg', muscles: ['Hamstrings', 'Glutes'], cues: ['Push hips back horizontally', 'Keep bar close to legs', 'Maintain flat back', 'Drive hips forward to lockout'],
    steps: [
      { title: 'Stance & Grip', detail: 'Stand upright holding the weight with a hip-width stance and knees unlocked ("soft knees").' },
      { title: 'Horizontal Hip Hinge', detail: 'Push your hips backward as if trying to touch a wall behind you. Keep the weight grazing close to your legs.' },
      { title: 'Hamstring Stretch', detail: 'Stop lowering when your hips reach maximum backward stretch (around shin height) while keeping your spine completely neutral.' },
      { title: 'Glute Drive', detail: 'Drive your hips forward to push back to full standing height, squeezing your glutes firmly without leaning backward.' }
    ],
    phases: {
      1: { name: 'DB Romanian Deadlifts', sets: 2, reps: '8-10', rpe: '6-7', rest: 60 },
      2: { name: 'Barbell RDLs', sets: 3, reps: '8-10', rpe: '7-8', rest: 90 },
      3: { name: 'Deficit Barbell RDLs', sets: 3, reps: '6-8', rpe: '8-9', rest: 120 }
    }
  },
  {
    id: 'legraise', image: 'legraise.jpg', muscles: ['Core', 'Obliques'], cues: ['Engage core before moving', 'No swinging', 'Curl pelvis at top', 'Exhale on contraction'],
    steps: [
      { title: 'Core Engagement', detail: 'Hang from a bar or set up at the cable station. Flatten your lower lumbar curve by tilting your pelvis backward slightly.' },
      { title: 'Initial Movement', detail: 'Without using momentum or swinging, contract your lower abdominals to draw your legs or cable through the movement path.' },
      { title: 'Peak Flexion', detail: 'Raise your legs or rotate through your torso until your pelvis flexes toward your chest. Exhale hard at peak contraction.' },
      { title: 'Controlled Eccentric', detail: 'Lower your legs or return the cable under a steady 2–3 second tempo to maintain continuous tension throughout your core.' }
    ],
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
    steps: [
      { title: 'Setup & Stance', detail: 'Stand with feet hip-width apart, shins 1 inch from the bar. Hinge down and take a shoulder-width grip.' },
      { title: 'Wedge & Slack', detail: 'Lower your hips, lift your chest, and pull the slack out of the bar until your hamstrings and lats feel fully loaded.' },
      { title: 'Push the Floor', detail: 'Drive your feet straight through the floor using quad power to move the bar upward until it clears your knees.' },
      { title: 'Hinge Lockout', detail: 'Drive your hips forward into the bar and lock out tall with shoulders back and glutes squeezed tightly.' }
    ],
    phases: {
      1: { name: 'Trap-Bar Deadlifts', sets: 3, reps: '8-10', rpe: '6-7', rest: 60 },
      2: { name: 'Conventional Deadlifts', sets: 3, reps: '5', rpe: '7-8', rest: 120 },
      3: { name: 'Heavy Conventional DL', sets: 4, reps: '4-5', rpe: '8-9', rest: 180 }
    }
  },
  {
    id: 'ohp', image: 'ohp.jpg', muscles: ['Shoulders', 'Triceps'], cues: ['Squeeze glutes and brace', 'Press bar clearing forehead', 'Lock elbows overhead', 'Lower to collarbone'],
    steps: [
      { title: 'Rack Setup', detail: 'Clean or unrack the bar onto your front shoulders. Grip just outside shoulder-width with wrists stacked over vertical forearms.' },
      { title: 'Pillar Activation', detail: 'Squeeze your glutes, lock your knees, and brace your abdominal wall to form a rigid, solid base.' },
      { title: 'Vertical Press', detail: 'Lean your head back slightly and press the bar straight up close to your face until it clears your forehead.' },
      { title: 'Overhead Lock', detail: 'Push your head back through under the bar ("look through the window") and lock your elbows straight overhead.' }
    ],
    phases: {
      1: { name: 'Seated DB OHP', sets: 3, reps: '8-10', rpe: '6-7', rest: 60 },
      2: { name: 'Standing Barbell OHP', sets: 3, reps: '6-8', rpe: '7-8', rest: 90 },
      3: { name: 'Heavy Standing OHP', sets: 4, reps: '4-6', rpe: '8-9', rest: 120 }
    }
  },
  {
    id: 'pullup', image: 'pullup.jpg', muscles: ['Lats', 'Biceps'], cues: ['Depress scapula first', 'Drive elbows to hip pockets', 'Pull chest to bar', 'Lower to dead hang'],
    steps: [
      { title: 'Dead Hang Setup', detail: 'Grab the bar with an overhand grip wider than shoulder-width. Let your body hang with arms completely extended.' },
      { title: 'Scapular Depression', detail: 'Pull your shoulder blades down and back to engage your lats before flexing your elbows.' },
      { title: 'Drive Chest to Bar', detail: 'Drive your elbows down toward your ribs as you pull your upper chest up toward the bar.' },
      { title: 'Smooth Lower', detail: 'Pause briefly with your chin over the bar, then lower yourself smoothly back down into a full dead hang.' }
    ],
    phases: {
      1: { name: 'Lat Pulldowns', sets: 3, reps: '8-10', rpe: '6-7', rest: 60 },
      2: { name: 'Bodyweight Pull-Ups', sets: 3, reps: '6-8', rpe: '7-8', rest: 90 },
      3: { name: 'Weighted Pull-Ups', sets: 4, reps: '4-6', rpe: '8-9', rest: 120 }
    }
  },
  {
    id: 'lunge', image: 'lunge.jpg', muscles: ['Quads', 'Glutes'], cues: ['Elevate rear foot', 'Lower rear knee vertically', 'Track knee over middle toe', 'Push through front heel'],
    steps: [
      { title: 'Stance & Alignment', detail: 'Stand tall, then step into a split stance or elevate your rear foot onto a bench with hip-width spacing.' },
      { title: 'Vertical Descent', detail: 'Keep your torso upright and lower your back knee straight down toward the floor under control.' },
      { title: 'Knee Alignment', detail: 'Ensure your front knee tracks directly in line with your second toe and stays behind your toes at the bottom.' },
      { title: 'Front Foot Drive', detail: 'Press firmly through your front heel and midfoot to drive back up to the starting position.' }
    ],
    phases: {
      1: { name: 'DB Walking Lunges', sets: 2, reps: '8-10/leg', rpe: '6-7', rest: 60 },
      2: { name: 'Bulgarian Split Squats', sets: 2, reps: '8-10/leg', rpe: '7-8', rest: 90 },
      3: { name: 'Heavy Bulgarian SS', sets: 3, reps: '6-8/leg', rpe: '8-9', rest: 90 }
    }
  },
  {
    id: 'plank', image: 'plank.jpg', muscles: ['Core', 'Transverse Abs'], cues: ['Straight line head to heels', 'Tuck pelvis under', 'Squeeze glutes hard', 'Breathe steadily'],
    steps: [
      { title: 'Forearm Alignment', detail: 'Place your forearms flat on the floor with elbows directly underneath your shoulders and feet hip-width apart.' },
      { title: 'Pelvic Lock', detail: 'Tuck your tailbone slightly under into a posterior pelvic tilt to lock your lower back into a neutral position.' },
      { title: 'Total Tension', detail: 'Contract your abdominals, squeeze your glutes, and push forearms into the floor to maintain a straight line head to heels.' },
      { title: 'Diaphragmatic Breath', detail: 'Hold the rigid tension while taking steady, deep breaths in through your nose and out through your mouth.' }
    ],
    phases: {
      1: { name: 'Forearm Plank', sets: 2, reps: '30-45s hold', rpe: '6-7', rest: 30 },
      2: { name: 'Ab Wheel Rollouts', sets: 3, reps: '8-10', rpe: '7-8', rest: 60 },
      3: { name: 'Weighted Plank', sets: 3, reps: '45-60s hold', rpe: '8-9', rest: 60 }
    }
  }
];
