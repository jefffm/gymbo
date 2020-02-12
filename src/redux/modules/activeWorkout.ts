import { SET_ACTIVE_WORKOUT } from "../actions";
import { IActiveWorkout } from "../../types";
export const STATE_KEY = "activeWorkout";

export type IActiveWorkoutType = IActiveWorkout | null;

const initialState = null;

const activeWorkout = (
  state: IActiveWorkoutType = initialState,
  action: any
): IActiveWorkoutType => {
  switch (action.type) {
    case SET_ACTIVE_WORKOUT: {
      return {
        ...state,
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
};
export default activeWorkout;
