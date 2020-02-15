import { SET_ACTIVE_WORKOUT } from "../actions";
import { nullableId } from "../../types";

export const STATE_KEY = "activeWorkoutId";

const activeWorkoutId = (state: nullableId = null, action: any): nullableId => {
  switch (action.type) {
    case SET_ACTIVE_WORKOUT: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
export default activeWorkoutId;
