import { IBarbell } from "../../types";
import { denormalize } from "normalizr";
import * as Schema from "../../schema";

export const STATE_KEY = "bars";

const ADD_BAR = "ADD_BAR";

interface IBars
  extends Readonly<{
    [exerciseId: number]: IBarbell;
  }> {}

const bars = (state: IBars = {}, action: any): IBars => {
  switch (action.type) {
    case ADD_BAR: {
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
export default bars;

export const addBar = (bar: IBarbell) => ({
  type: ADD_BAR,
  payload: bar
});

export const selectHydrated = (state: IBars, id: number) =>
  denormalize(id, Schema.bar, state);
