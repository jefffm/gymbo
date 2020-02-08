import { schema } from "normalizr";
import { ISetGroupTemplate, SetType } from "./types";
import { Pounds } from "./util/Weight";

// TODO: fixup this schema

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
