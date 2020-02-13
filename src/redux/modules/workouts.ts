import { IWorkout } from "../../types";
import { ADD_ENTITIES, addEntities } from "../actions";

export const STATE_KEY = "workouts";

export interface IWorkouts
  extends Readonly<{
    [exerciseId: number]: IWorkout;
  }> {}

const workouts = (state: IWorkouts = {}, action: any): IWorkouts => {
  switch (action.type) {
    case ADD_ENTITIES: {
      return {
        ...state,
        ...action.payload.workouts
      };
    }
    default: {
      return state;
    }
  }
};
export default workouts;

export const add = (...workouts: IWorkout[]) =>
  addEntities({
    [STATE_KEY]: Object.assign({}, ...workouts.map(w => ({ [w.id]: w })))
  });
