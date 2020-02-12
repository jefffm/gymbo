import { IWeight } from "./util/Weight";

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
  WEIGHT
  //BODY_WEIGHT,
  //TIMED
}

export enum BarType {
  NONE = "None",
  BARBELL = "Barbell",
  DUMBELL = "Dumbell", // TODO: count volume double for anything dumbell
  SAFETY_BAR = "Safety Bar",
  CAMBERED_BAR = "Cambered Bar",
  NEUTRAL_GRIP_BAR = "Neutral-grip Bar",
  TRAP_BAR = "Trap Bar",
  BUFFALO_BAR = "Buffalo Bar"
}

export interface IBar {
  id: number;
  type: BarType;
  weight: IWeight;
}

/// This is currently unused
/// A ProgramTemplate should track the progress of multiple workout templates
export interface IProgramTemplate {}

export interface IExercise {
  id: number;
  name: string;
  type: ExerciseType;
  barbellId: number;
}

/**
 * TEMPLATE WORKOUT
 */

/// A group of sets. "3 sets of 175 lbs for 5 reps" is a set group because it is actually three sets.
export interface ISetGroupTemplateBase {
  setType: SetType;
  sets: number;
  reps: number;
  restMinutes?: number; // TODO: parse this into a time unit somehow
  weight?: IWeight;
  rpe?: number;
}

export interface IExerciseTemplate {
  exerciseId: number; // Foreign key for an IExercise
  setGroups: ISetGroupTemplateBase[]; // TODO: is it necessary to normalize this?
}

export interface IWorkoutTemplate {
  id: number;
  workoutName: string;
  exercises: IExerciseTemplate[];
  notes?: string;
}

/**
 * ACTIVE WORKOUT
 */

export enum SetResult {
  NOT_DONE = "NOT_DONE",
  DONE = "DONE",
  FAIL = "FAIL"
}

/// An ActiveSet represents ONE set of the currently active workout
/// It's basically a temporary buffer for a LoggedSet
export interface IActiveSet {
  setType: SetType;
  reps?: number;
  restMinutes?: number; // TODO: parse this into a time unit somehow
  weight?: IWeight;
  rpe?: number;
  result?: SetResult;
}

export interface IActiveExercise {
  exerciseId: number; // Foreign key for an IExercise
  sets: IActiveSet[]; // TODO: is it necessary to normalize this?
}

/// Intermediate type that accepts a workoutTemplate and implements a builder for a LoggedWorkout
export interface IActiveWorkout {
  workoutId: number;
  startTime: string; // ISO time
  workoutTemplateId?: number;
  workoutName: string;
  exercises: IActiveExercise[];
  notes?: string;
}

/**
 * LOGGED WORKOUT
 */

export interface ILoggedSet {
  setType: SetType;
  weight: IWeight;
  reps: number;
  rpe?: number;
  restMinutes?: number;
  timeCompleted?: number; // timestamp?
}

export interface ILoggedExercise {
  exerciseId: number;
  setGroups: ILoggedSet[];
}

export interface ILoggedWorkout {
  id: number;
  startTime: Date;
  endTime: Date;
  workoutTemplateId?: number;
  workoutName: string;
  exercises: ILoggedExercise[];
  notes?: string;
}
