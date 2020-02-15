import { IWorkout } from "../../types";
import { ADD_ENTITY, addEntity } from "../actions";

export const STATE_KEY = "workouts";

export interface IWorkouts
  extends Readonly<{
    [exerciseId: number]: IWorkout;
  }> {}

const workouts = (state: IWorkouts = {}, action: any): IWorkouts => {
  switch (action.type) {
    case ADD_ENTITY: {
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
  addEntity({
    [STATE_KEY]: Object.assign({}, ...workouts.map(w => ({ [w.id]: w })))
  });
