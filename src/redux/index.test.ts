import { addExercise } from "./modules/exercises";
import { IExercise, ExerciseType } from "../types";
import { rootReducer } from "./index";
import { createStore } from "redux";

it("Adds an exercise to the store", () => {
  const store = createStore(rootReducer);
  const initialState = store.getState();

  expect(initialState.exercises).toEqual({});

  const exercise: IExercise = {
    id: 1,
    name: "Squat",
    type: ExerciseType.WEIGHT,
    barbellId: 1
  };
  store.dispatch(addExercise(exercise));
  const updatedState = store.getState();

  expect(updatedState.exercises).toEqual({
    [exercise.id]: exercise
  });
});
