import { IWeight } from './util/Weight'

/***

ProgramTemplate (tbd) -> WorkoutTemplate -> ExerciseTemplate -> SetGroupTemplate

Workouts can be selected using WorkoutTemplates

A workout template contains several ExerciseTemplates, each of which contains one or more SetGroupTemplates

 */

export enum SetType {
    NORMAL,
    WARMUP,
    DROP,
    FAIL,
    AMRAP
}

/// TODO: support other kinds of exercise
export enum ExerciseType {
    WEIGHT,
    //BODY_WEIGHT,
    //TIMED
}

export enum BarType {
    NONE = "None",
    BARBELL = "Barbell",
    DUMBELL = "Dumbell",  // TODO: count volume double for anything dumbell
    SAFETY_BAR = "Safety Bar",
    CAMBERED_BAR = "Cambered Bar",
    NEUTRAL_GRIP_BAR = "Neutral-grip Bar",
    TRAP_BAR = "Trap Bar",
    BUFFALO_BAR = "Buffalo Bar"
}

export interface IBar {
    id: number,
    type: BarType,
    weight: IWeight
}

/// This is currently unused
/// A ProgramTemplate should track the progress of multiple workout templates
export interface IProgramTemplate { }

export interface IExercise {
    id: number
    name: string
    type: ExerciseType
    barbellId: number
}

/// A group of sets. "3 sets of 175 lbs for 5 reps" is a set group because it is actually three sets.
export interface ISetGroupTemplate {
    exerciseId: number  // Foreign key for an IExercise
    setType?: SetType  // TODO: link this up with SetType somehow (from string?)
    weight?: IWeight  // TODO: parse this into a weight
    reps: number
    rpe?: number
    sets?: number
    restMinutes?: number // TODO: parse this into a time unit somehow
}

export interface IWorkoutTemplate {
    id: number
    workoutName: string;
    setGroups: ISetGroupTemplate[];  // TODO: is it necessary to normalize this?
    notes?: string
}

export interface ILoggedWorkout {
}

export interface ILoggedExercise {
}

export interface ILoggedSet {
    workoutId: string
    setType?: SetType
    weight: IWeight
    reps: number
    rpe?: number
    restMinutes?: number
    timeCompleted?: number // timestamp?
}

export interface ILoggedExercise {
    exercise: string
    variation?: string
}

