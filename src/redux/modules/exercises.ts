import { IExercise } from "../../types";
import { denormalize } from "normalizr";
import { exercise } from "../../schema";
import { ADD_ENTITIES, addEntities } from "../actions";

export const STATE_KEY = "exercises";

interface IExercises
  extends Readonly<{
    [exerciseId: number]: IExercise;
  }> {}

const exercises = (state: IExercises = {}, action: any): IExercises => {
  switch (action.type) {
    case ADD_ENTITIES: {
      return {
        ...state,
        ...action.payload.exercises
      };
    }
    default: {
      return state;
    }
  }
};
export default exercises;

export const add = (exercises: IExercises) =>
  addEntities({ [STATE_KEY]: exercises });

export const selectHydrated = (state: IExercises, id: number) =>
  denormalize(id, exercise, state);
