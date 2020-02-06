export { add as addBars } from "./modules/bars";
export { add as addExercises } from "./modules/exercises";
export { add as addWorkoutTemplates } from "./modules/workoutTemplates";
export { add as addLoggedWorkouts } from "./modules/loggedWorkout";

export const ADD_ENTITIES = "ADD_ENTITIES";
export const addEntities = (entities: any) => ({
  type: ADD_ENTITIES,
  payload: entities
});
