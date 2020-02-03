import { ILoggedWorkout } from "../../types";

export const STATE_KEY = "loggedWorkouts";

// normalized entity reducer
interface ILoggedWorkouts
  extends Readonly<{
    [exerciseId: number]: ILoggedWorkout;
  }> {}

const loggedWorkouts = (
  state: ILoggedWorkouts = {},
  action: any
): ILoggedWorkouts => {
  switch (action.type) {
    case "LOG_WORKOUT": {
      return {
        ...state,
        ...action.payload.loggedWorkouts
      };
    }
    default: {
      return state;
    }
  }
};
export default loggedWorkouts;
