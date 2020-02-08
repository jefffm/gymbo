import { IExercise, ExerciseType } from "../../types";
import { denormalize } from "normalizr";
import { exercise } from "../../schema";
import { ADD_ENTITIES, addEntities } from "../actions";

export const STATE_KEY = "exercises";

export interface IExercises
  extends Readonly<{
    [exerciseId: number]: IExercise;
  }> {}

const initialState: IExercises = {
  1: {
    id: 1,
    name: "Squat",
    type: ExerciseType.WEIGHT,
    barbellId: 1
  },
  2: {
    id: 2,
    name: "Overhead Press",
    type: ExerciseType.WEIGHT,
    barbellId: 1
  },
  3: {
    id: 3,
    name: "Deadlift",
    type: ExerciseType.WEIGHT,
    barbellId: 1
  },
  4: {
    id: 4,
    name: "Bench Press",
    type: ExerciseType.WEIGHT,
    barbellId: 1
  }
};

const exercises = (
  state: IExercises = initialState,
  action: any
): IExercises => {
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
