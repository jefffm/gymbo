import { IExercise } from "../types"

interface Exercises {
    exercises: IExercise[]
}

const initialState: Exercises = { exercises: [] }

const exercises = (
    state: Exercises = initialState,
    action: any
): Exercises => {
    return state
}
export default exercises
