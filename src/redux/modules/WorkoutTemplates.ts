import { IWorkoutTemplate } from "../../types";

interface IWorkoutTemplates {
  workoutTemplates: IWorkoutTemplate[];
}

const initialState: IWorkoutTemplates = {
  //workoutTemplates: []
  workoutTemplates: [
    {
      workoutName: "Test Workout",
      exercises: []
    }
  ]
};

const workoutTemplate = (
  state: IWorkoutTemplates = initialState,
  action: any
): IWorkoutTemplates => {
  return state;
};
export default workoutTemplate;
