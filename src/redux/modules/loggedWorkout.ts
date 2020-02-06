import { ILoggedWorkout } from "../../types";
import * as Schema from "../../schema";
import { denormalize } from "normalizr";
import { ADD_ENTITIES, addEntities } from "../actions";

export const STATE_KEY = "loggedWorkouts";

interface ILoggedWorkouts
  extends Readonly<{
    [exerciseId: number]: ILoggedWorkout;
  }> {}

const loggedWorkouts = (
  state: ILoggedWorkouts = {},
  action: any
): ILoggedWorkouts => {
  switch (action.type) {
    case ADD_ENTITIES: {
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

export const add = (loggedWorkouts: ILoggedWorkouts) =>
  addEntities({ [STATE_KEY]: loggedWorkouts });

export const selectHydrated = (state: ILoggedWorkouts, id: number) =>
  denormalize(id, Schema.loggedWorkout, state);
