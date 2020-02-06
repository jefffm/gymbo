import { IWorkoutTemplate } from "../../types";
import * as Schema from "../../schema";
import { denormalize } from "normalizr";

export const STATE_KEY = "workoutTemplates";

interface IWorkoutTemplates
  extends Readonly<{
    [workoutTemplateId: number]: IWorkoutTemplate;
  }> {}

const workoutTemplate = (
  state: IWorkoutTemplates = {},
  action: any
): IWorkoutTemplates => {
  return state;
};
export default workoutTemplate;

export const selectHydrated = (state: IWorkoutTemplates, id: number) =>
  denormalize(id, Schema.workoutTemplate, state);
