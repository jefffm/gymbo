import { ExerciseType, BarType, SetType } from "../types";
import { rootReducer } from "./index";
import { createStore } from "redux";
import { selectExercise, selectBar } from "./selectors";
import { addBars, addExercises, addWorkoutTemplates } from "./actions";
import { Pounds } from "../util/Weight";
import { IWorkoutTemplates } from "./modules/workoutTemplates";

describe("with the store setup", () => {
  const store = createStore(rootReducer);

  describe("with a bar added", () => {
    const bars = {
      999: {
        id: 999,
        type: BarType.BARBELL,
        weight: new Pounds(45)
      }
    };

    store.dispatch(addBars(bars));

    describe("with an exercise added", () => {
      const exercises = {
        999: {
          id: 999,
          name: "Reverse-banded Deadlift Backflips",
          type: ExerciseType.WEIGHT,
          barbellId: 999
        }
      };
      store.dispatch(addExercises(exercises));
      const updatedState = store.getState();

      it("Has an exercise in the store", () => {
        expect(updatedState.exercises[999]).toEqual(exercises[999]);
      });

      it("can select the exercise and the bar using the selector", () => {
        expect(selectExercise(updatedState, 999)).toEqual(exercises[999]);
        expect(selectBar(updatedState, exercises[999].barbellId)).toEqual(
          bars[999]
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
