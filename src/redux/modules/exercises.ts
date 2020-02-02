import { IExercise, ExerciseType, BarType } from "../../types";
import { Pounds } from "../../util/Weight";
//import { denormalize } from "normalizr";

export const STATE_KEY = "exercises";

// normalized entity reducer
interface IExercises
  extends Readonly<{
    [exerciseId: number]: IExercise;
  }> {}

const exercises = (
  state: IExercises = {
    1: {
      name: "Bench Press",
      type: ExerciseType.WEIGHT,
      barType: BarType.BARBELL,
      barWeight: new Pounds(45)
    }
  },
  action: any
): IExercises => {
  switch (action.type) {
    case "ADD_EXERCISE": {
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
