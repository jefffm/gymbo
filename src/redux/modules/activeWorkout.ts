import { SET_ACTIVE_WORKOUT } from "../actions";
export const STATE_KEY = "activeWorkout";

// TODO: create an intermediate type that accepts a workoutTemplate and implements a builder for a LoggedWorkout
export interface IActiveWorkout
  extends Readonly<{
    workoutTemplateId?: number;
  }> {}

const initialState: IActiveWorkout = {};

const activeWorkout = (
  state: IActiveWorkout = initialState,
  action: any
): IActiveWorkout => {
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
