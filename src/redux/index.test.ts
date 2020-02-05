import { addExercise } from "./modules/exercises";
import { IExercise, ExerciseType, IBarbell as IBar, BarType } from "../types";
import { rootReducer } from "./index";
import { createStore } from "redux";
import { selectExercise, selectBar } from "./modules/selectors";
import { addBar } from "./modules/bars";
import { Pounds } from "../util/Weight";

describe("with the store setup", () => {
  const store = createStore(rootReducer);
  const initialState = store.getState();

  it("Should be initialized", () => {
    expect(initialState.exercises).toEqual({});
  });
  describe("with a bar added", () => {
    const bar: IBar = {
      id: 1,
      type: BarType.BARBELL,
      weight: new Pounds(45)
    };

    store.dispatch(addBar(bar));

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

      it("can select the exercise and the bar using the selector", () => {
        expect(selectExercise(updatedState, 1)).toEqual(exercise);
        expect(selectBar(updatedState, exercise.barbellId)).toEqual(bar);
      });
    });
  });
});
