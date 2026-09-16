# Kinetic Routine 🏋️‍♂️

A minimalist, twice-per-week full-body compound exercise companion built in the **Anthropic beige & burnt orange terracotta** aesthetic. 

Live Web Application: [https://vijaik2k7.github.io/kinetic-routine/](https://vijaik2k7.github.io/kinetic-routine/)

---

## 🌟 Overview

**Kinetic Routine** optimizes muscle hypertrophy, recovery, and strength progression through a structured twice-a-week full-body split (Day A on Tuesdays and Day B on Saturdays). Spacing sessions 48 to 72 hours apart provides maximal protein synthesis stimulus with complete nervous system recovery.

The web app features **animated vector exercise visuals**, **3-phase progressive overload tracking**, an **auto-rolling interval rest timer**, audio chimes, and persistent workout history logging.

---

## 📅 The Weekly Split

### **Day A (Tuesday Focus: Knee Dominance, Horizontal Push/Pull)**
1. **Barbell Back Squats** *(or Goblet Squats)*: 3 sets × 6–8 reps
2. **Flat Barbell / Dumbbell Bench Press**: 3 sets × 6–8 reps
3. **Chest-Supported Rows** *(or Barbell Rows)*: 3 sets × 8–10 reps
4. **Romanian Deadlifts** *(Dumbbell or Barbell)*: 2 sets × 8–10 reps
5. **Hanging Leg Raises / Cable Woodchops**: 2 sets × 12–15 reps

### **Day B (Saturday Focus: Hip Dominance, Vertical Push/Pull)**
1. **Conventional or Trap-Bar Deadlifts**: 3 sets × 5 reps
2. **Overhead Barbell or Dumbbell Press**: 3 sets × 6–8 reps
3. **Pull-Ups or Lat Pulldowns**: 3 sets × 6–8 reps
4. **Bulgarian Split Squats or Walking Lunges**: 2 sets × 8–10 reps per leg
5. **Plank or Ab Wheel Rollouts**: 2–3 sets × 30–45s hold / 8–10 rollouts

---

## 📈 3-Phase Progression Strategy

| Phase | Duration | Rep Range & Intensity | Strategy & Rest |
| --- | --- | --- | --- |
| **Phase 1: Foundation & Mechanics** | Weeks 1–4 | 3 sets × 8–10 reps @ RPE 6–7 | Simpler variations (Goblet Squats, DB Press, RDLs). 60s rest intervals. |
| **Phase 2: Progressive Overload & Density** | Weeks 5–8 | 3–4 sets × 6–8 reps @ RPE 7–8 | Primary barbell compound lifts. Add 2.5–5 lbs (upper) or 5–10 lbs (lower) per week. 90s rest. |
| **Phase 3: High-Intensity Strength** | Weeks 9–12 | 3–4 sets × 4–6 reps @ RPE 8–9 | Heavy primary compounds with 2–3 minute rest. Conclude with a 1-week deload. |

---

## 🧬 Movement Evolution Pathways

As proficiency and joint tissue adapt, exercises evolve across phases:

* **Squat**: Goblet Squat $\rightarrow$ Barbell Back Squat $\rightarrow$ Paused Squat
* **Hinge**: DB Romanian Deadlift $\rightarrow$ Trap Bar Deadlift $\rightarrow$ Barbell Conventional Deadlift
* **Push**: DB Floor/Bench Press $\rightarrow$ Barbell Bench Press $\rightarrow$ Heavy Standing Overhead Press
* **Pull**: Inverted Rows / Lat Pulldown $\rightarrow$ Chest-Supported Rows / Pull-Ups $\rightarrow$ Pendlay Rows / Weighted Pull-Ups

---

## 🚀 App Features

* 🎨 **Anthropic Palette Aesthetics**: Light mode `#FAF9F6` (Cream Beige) and Dark mode `#141413` (Charcoal Obsidian) with `#D97757` Terracotta burnt orange accents and Newsreader serif typography.
* ⏱️ **Auto-Rolling Rest Timer**: Circular countdown ring with Web Audio API interval chimes, quick presets (**30s**, **60s**, **90s**, **120s**), and automatic set-to-set transition upon timer end.
* 📊 **Interactive Exercise Visuals**: Custom vector motion SVG diagrams illustrating form cues and active muscle group highlights (Quads, Glutes, Hamstrings, Chest, Lats, Shoulders, Core).
* 📅 **Smart Day Detection**: Automatically detects Tuesdays (Day A) and Saturdays (Day B) with manual override controls.
* 📝 **Session History**: Persists completed workouts, weight lifted, RPE notes, and volume history in `localStorage`.

---

## 🛠️ Tech Stack

* **Framework**: React 18 + TypeScript + Vite
* **Styling**: Tailwind CSS + Custom CSS Variables
* **Icons**: Lucide React
* **Audio**: Web Audio API Sound Synthesizer
* **Deployment**: `gh-pages` on GitHub Pages

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/vijaik2k7/kinetic-routine.git
cd kinetic-routine

# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## 📜 License

MIT License © Vijai Rangan
