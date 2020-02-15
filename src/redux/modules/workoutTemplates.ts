import { IWorkoutTemplate, SetType } from "../../types";
import * as Schema from "../../schema";
import { denormalize } from "normalizr";
import {
  ADD_ENTITY,
  addEntity,
  removeEntities,
  REMOVE_ENTITIES
} from "../actions";

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
        exerciseId: 1,
        setGroups: [
          {
            setType: SetType.NORMAL,
            reps: 5,
            rpe: 6,
            numSets: 1
          },
          {
            setType: SetType.NORMAL,
            reps: 5,
            rpe: 7,
            numSets: 1
          },
          {
            setType: SetType.NORMAL,
            reps: 5,
            rpe: 8,
            numSets: 1
          }
        ]
      }
    ]
  }
};

const workoutTemplate = (
  state: IWorkoutTemplates = initialState,
  action: any
): IWorkoutTemplates => {
  switch (action.type) {
    case ADD_ENTITY: {
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

export const add = (...workoutTemplates: IWorkoutTemplate[]) =>
  addEntity({
    [STATE_KEY]: Object.assign(
      {},
      ...workoutTemplates.map(w => ({ [w.id]: w }))
    )
  });

export const remove = (...ids: number[]) => removeEntities(...ids);

export const selectHydrated = (state: IWorkoutTemplates, id: number) =>
  denormalize(id, Schema.workoutTemplate, state);
