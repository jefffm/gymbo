import { ExerciseType, BarType, SetType } from "../types";
import { rootReducer } from "./index";
import { createStore } from "redux";
import { selectExercise, selectBar } from "./selectors";
import { addBars, addExercises, addWorkoutTemplates } from "./actions";
import { Pounds } from "../util/Weight";
import { IWorkoutTemplates } from "./modules/workoutTemplates";

describe("with the store setup", () => {
  const store = createStore(rootReducer);
  const initialState = store.getState();

  it("Should be initialized", () => {
    expect(initialState.exercises).toEqual({});
  });
  describe("with a bar added", () => {
    const bars = {
      1: {
        id: 1,
        type: BarType.BARBELL,
        weight: new Pounds(45)
      }
    };

    store.dispatch(addBars(bars));

    describe("with an exercise added", () => {
      const exercises = {
        1: {
          id: 1,
          name: "Squat",
          type: ExerciseType.WEIGHT,
          barbellId: 1
        }
      };
      store.dispatch(addExercises(exercises));
      const updatedState = store.getState();

      it("Has an exercise in the store", () => {
        expect(updatedState.exercises).toEqual(exercises);
      });

      it("can select the exercise and the bar using the selector", () => {
        expect(selectExercise(updatedState, 1)).toEqual(exercises[1]);
        expect(selectBar(updatedState, exercises[1].barbellId)).toEqual(
          bars[1]
        );
      });

      it("can add workout templates using the exercise", () => {
        const workoutTemplates: IWorkoutTemplates = {
          1: {
            id: 1,
            workoutName: "Day 1",
            setGroups: [
              {
                exerciseId: 1,
                setType: SetType.NORMAL,
                weight: new Pounds(180),
                reps: 5,
                sets: 3
              }
            ]
          },
          2: {
            id: 2,
            workoutName: "Day 2",
            setGroups: [
              {
                exerciseId: 1,
                setType: SetType.AMRAP,
                weight: new Pounds(190),
                reps: 3
              }
            ]
          }
        };

        store.dispatch(addWorkoutTemplates(workoutTemplates));

        const updatedState2 = store.getState();

        expect(updatedState2.workoutTemplates).toEqual(workoutTemplates);
      });
    });
  });
});
