import { nullableId } from "../types";
export { add as addBars } from "./modules/bars";
export { add as addExercises } from "./modules/exercises";
export {
  add as addWorkoutTemplates,
  remove as removeWorkoutTemplates
} from "./modules/workoutTemplates";
export { add as addWorkouts } from "./modules/workouts";

export const ADD_ENTITY = "ADD_ENTITY";
export const addEntity = (entity: any) => ({
  type: ADD_ENTITY,
  payload: entity
});

export const REMOVE_ENTITIES = "REMOVE_ENTITIES";
export const removeEntities = (...entityIds: number[]) => ({
  type: REMOVE_ENTITIES,
  payload: entityIds
});

export const SET_ACTIVE_WORKOUT = "SET_ACTIVE_WORKOUT";
export const setActiveWorkoutId = (activeWorkoutId: nullableId) => ({
  type: SET_ACTIVE_WORKOUT,
  payload: activeWorkoutId
});
