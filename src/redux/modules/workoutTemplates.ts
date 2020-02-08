import { IWorkoutTemplate, SetType } from "../../types";
import * as Schema from "../../schema";
import { denormalize } from "normalizr";
import {
  ADD_ENTITIES,
  addEntities,
  removeEntities,
  REMOVE_ENTITIES
} from "../actions";
import { Z_FILTERED } from "zlib";

export const STATE_KEY = "workoutTemplates";

export interface IWorkoutTemplates
  extends Readonly<{
    [workoutTemplateId: number]: IWorkoutTemplate;
  }> {}

// TODO: remove test data
const initialState: IWorkoutTemplates = {
  1: {
    id: 1,
    workoutName: "Test Workout Template",
    exercises: [
      {
        exerciseId: 1, setGroups: [
          {
            setType: SetType.NORMAL,
            reps: 5,
            rpe: 6,
            sets: 1
          },
          {
            setType: SetType.NORMAL,
            reps: 5,
            rpe: 7,
            sets: 1
          },
          {
            setType: SetType.NORMAL,
            reps: 5,
            rpe: 8,
            sets: 3
          },
        ]
      },
    ]
  };
}

const workoutTemplate = (
  state: IWorkoutTemplates = initialState,
  action: any
): IWorkoutTemplates => {
  switch (action.type) {
    case ADD_ENTITIES: {
      return {
        ...state,
        ...action.payload.workoutTemplates
      };
    }
    case REMOVE_ENTITIES: {
      return action.payload.reduce(
        (newState: IWorkoutTemplates, id: number) => ({
          ...newState,
          [id]: state[id]
        }),
        {}
      );
    }
    default: {
      return state;
    }
  }
};
export default workoutTemplate;

export const add = (workoutTemplates: IWorkoutTemplates) =>
  addEntities({ [STATE_KEY]: workoutTemplates });

export const remove = (...ids: number[]) => removeEntities(...ids);

export const selectHydrated = (state: IWorkoutTemplates, id: number) =>
  denormalize(id, Schema.workoutTemplate, state);
