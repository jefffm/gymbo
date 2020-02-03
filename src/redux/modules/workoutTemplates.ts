import { IWorkoutTemplate } from "../../types";

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
