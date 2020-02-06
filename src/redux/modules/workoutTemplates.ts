import { IWorkoutTemplate } from "../../types";
import * as Schema from "../../schema";
import { denormalize } from "normalizr";
import { ADD_ENTITIES, addEntities } from "../actions";

export const STATE_KEY = "workoutTemplates";

export interface IWorkoutTemplates
  extends Readonly<{
    [workoutTemplateId: number]: IWorkoutTemplate;
  }> {}

// TODO: add pre-initialized workout templates and develop rendering/listing

const workoutTemplate = (
  state: IWorkoutTemplates = {},
  action: any
): IWorkoutTemplates => {
  switch (action.type) {
    case ADD_ENTITIES: {
      return {
        ...state,
        ...action.payload.workoutTemplates
      };
    }
    default: {
      return state;
    }
  }
};
export default workoutTemplate;

export const add = (workoutTemplates: IWorkoutTemplates) =>
  addEntities({ [STATE_KEY]: workoutTemplates });

export const selectHydrated = (state: IWorkoutTemplates, id: number) =>
  denormalize(id, Schema.workoutTemplate, state);
