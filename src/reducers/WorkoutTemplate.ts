import { SetType, ISetGroupTemplate } from "../types"



export interface IWorkoutTemplate {
    sets: ISetGroupTemplate[]
}

const initialState: IWorkoutTemplate = {
    sets: []
}

const workoutTemplate = (
    state: IWorkoutTemplate = initialState,
    action: any
): IWorkoutTemplate => {
    // TODO: add plate, remove plate, update unit, update barWeight
    return state
}
export default workoutTemplate