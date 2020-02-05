import { addExercise } from "./modules/exercises";
import { IExercise, ExerciseType } from "../types";
import { rootReducer } from "./index";
import { createStore } from "redux";
import { selectExercise } from "./modules/selectors";

describe("with the store setup", () => {
  const store = createStore(rootReducer);
  const initialState = store.getState();

  it("Should be initialized", () => {
    expect(initialState.exercises).toEqual({});
  });

  describe("with an exercise added", () => {
    const exercise: IExercise = {
      id: 1,
      name: "Squat",
      type: ExerciseType.WEIGHT,
      barbellId: 1
    };
    store.dispatch(addExercise(exercise));
    const updatedState = store.getState();

    it("Has an exercise in the store", () => {
      expect(updatedState.exercises).toEqual({
        [exercise.id]: exercise
      });
    });

    it("can select the exercise using the selector", () => {
      expect(selectExercise(updatedState, 1)).toEqual(exercise);
    });
  });
});
