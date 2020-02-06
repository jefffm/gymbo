import { IBar, BarType } from "../../types";
import { denormalize } from "normalizr";
import * as Schema from "../../schema";
import { ADD_ENTITIES, addEntities } from "../actions";
import { Pounds, Kilos } from "../../util/Weight";

export const STATE_KEY = "bars";

interface IBars
  extends Readonly<{
    [exerciseId: number]: IBar;
  }> {}

const initialState: IBars = {
  1: {
    id: 1,
    type: BarType.BARBELL,
    weight: new Pounds(45)
  },
  2: {
    id: 2,
    type: BarType.BARBELL,
    weight: new Kilos(15)
  }
};

const bars = (state: IBars = initialState, action: any): IBars => {
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
