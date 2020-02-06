import { IBar } from "../../types";
import { denormalize } from "normalizr";
import * as Schema from "../../schema";
import { ADD_ENTITIES, addEntities } from "../actions";

export const STATE_KEY = "bars";

interface IBars
  extends Readonly<{
    [exerciseId: number]: IBar;
  }> {}

const bars = (state: IBars = {}, action: any): IBars => {
  switch (action.type) {
    case ADD_ENTITIES: {
      return {
        ...state,
        ...action.payload.bars
      };
    }
    default: {
      return state;
    }
  }
};
export default bars;

export const add = (bars: IBars) => addEntities({ [STATE_KEY]: bars });

export const selectHydrated = (state: IBars, id: number) =>
  denormalize(id, Schema.bar, state);
