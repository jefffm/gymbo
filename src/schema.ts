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

const bar = new schema.Entity("bars");
const exercise = new schema.Entity("exercises", {
  barId: bar
});
const workoutTemplate = new schema.Entity("workoutTemplates");
const loggedWorkout = new schema.Entity("loggedWorkouts");

const exerciseTemplate = new schema.Entity("exerciseTemplates", {
  exercise: exercise
});

const workoutTemplate = new schema.Entity("workoutTemplates", {
  exercises: [exerciseTemplate]
});
