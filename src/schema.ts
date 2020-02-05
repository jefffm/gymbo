import { schema } from "normalizr";
import { ISetGroupTemplate, SetType } from "./types";
import { Pounds } from "./util/Weight";

// This represents a workout
const workoutTemplates: ISetGroupTemplate[] = [
  {
    exerciseId: 1,
    setType: SetType.NORMAL,
    weight: new Pounds(180),
    reps: 5,
    sets: 3
  },
  {
    exerciseId: 1,
    setType: SetType.AMRAP,
    weight: new Pounds(190),
    reps: 3
  }
];

export const bar = new schema.Entity("bars");
export const exercise = new schema.Entity("exercises", {
  barId: bar
});
export const loggedWorkout = new schema.Entity("loggedWorkouts");

export const exerciseTemplate = new schema.Entity("exerciseTemplates", {
  exercise: exercise
});

export const workoutTemplate = new schema.Entity("workoutTemplates", {
  exercises: [exerciseTemplate]
});
