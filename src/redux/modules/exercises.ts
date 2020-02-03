import { IExercise } from "../../types";
//import { denormalize } from "normalizr";

export const STATE_KEY = "exercises";

const ADD_EXERCISE = "ADD_EXERCISE";

// normalized entity reducer
interface IExercises
  extends Readonly<{
    [exerciseId: number]: IExercise;
  }> {}

const exercises = (state: IExercises = {}, action: any): IExercises => {
  switch (action.type) {
    case ADD_EXERCISE: {
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
export default exercises;

export const addExercise = (exercise: IExercise) => ({
  type: ADD_EXERCISE,
  payload: exercise
});
