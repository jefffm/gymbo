import { IWeight } from "./util/Weight";

export type nullableId = number | null;

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
  numSets: number;
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

export enum SetResult {
  NOT_DONE = "NOT_DONE",
  DONE = "DONE",
  FAIL = "FAIL"
}

export interface ISet {
  id: string;
  setType?: SetType;
  weight?: IWeight;
  reps?: number;
  rpe?: number;
  restMinutes?: number;
  result?: SetResult;
  timeCompleted?: number;
}

export interface IExerciseSets {
  exerciseId: number;
  sets: ISet[];
}

export enum WorkoutState {
  CREATED,
  STARTED,
  COMPLETED
}

export interface IWorkout {
  id: number;
  state: WorkoutState;
  startTime?: string;
  endTime?: string;
  workoutTemplateId?: number;
  name?: string;
  exercises?: IExerciseSets[];
  notes?: string;
}
