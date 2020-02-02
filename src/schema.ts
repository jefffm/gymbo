import { schema } from "normalizr";
import { ISetGroupTemplate } from "./types";

const exercise = new schema.Entity("exercises");

const exerciseTemplate = new schema.Entity("exerciseTemplates", {
  exercise: exercise
});

const workoutTemplate = new schema.Entity("workoutTemplates", {
  exercises: [exerciseTemplate]
});
