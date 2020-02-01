import { SetType, IWorkoutTemplate } from "../types"


const initialState: WorkoutTemplates = {
    //workoutTemplates: []
    workoutTemplates: [
        {
            workoutTemplateId: 1,
            workoutName: "Test Workout",
            exercises: []
        }
    ]
}

const workoutTemplate = (
    state: WorkoutTemplates = initialState,
    action: any
): WorkoutTemplates => {
    return state
}
export default workoutTemplate
