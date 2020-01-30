import { IWeight } from '../util/Weight'


interface IExerciseSetTemplate {
    reps: number
    weight?: IWeight,
    rpe?: number
}

interface IExerciseSetGroupTemplate {
    sets: IExerciseSet[]
}

interface IExerciseSet {
    reps: number
    weight: IWeight,
    rpe?: number
}


export default interface IExerciseSetGroup {
    sets: IExerciseSet[]
}