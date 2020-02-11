import { IActiveWorkoutType } from "./modules/activeWorkout";
export { add as addBars } from "./modules/bars";
export { add as addExercises } from "./modules/exercises";
export {
  add as addWorkoutTemplates,
  remove as removeWorkoutTemplates
} from "./modules/workoutTemplates";
export { add as addLoggedWorkouts } from "./modules/loggedWorkout";

export const ADD_ENTITIES = "ADD_ENTITIES";
export const addEntities = (entities: any) => ({
  type: ADD_ENTITIES,
  payload: entities
});

export const REMOVE_ENTITIES = "REMOVE_ENTITIES";
export const removeEntities = (...entityIds: number[]) => ({
  type: REMOVE_ENTITIES,
  payload: entityIds
});

export const SET_ACTIVE_WORKOUT = "SET_ACTIVE_WORKOUT";
export const setActiveWorkout = (activeWorkout: IActiveWorkoutType) => ({
  type: SET_ACTIVE_WORKOUT,
  payload: activeWorkout
});
