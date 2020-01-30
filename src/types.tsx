import { IWeight } from './util/Weight'

export enum SetType {
    NORMAL,
    WARMUP,
    DROP,
    FAIL,
    AMRAP
}

export interface ISetGroupTemplate {
    name: string
    exercise: string
    variation?: string
    setType?: SetType  // TODO: link this up with SetType somehow (from string?)
    weight?: IWeight  // TODO: parse this into a weight
    reps: number
    rpe?: number
    sets?: number
    restMinutes?: number // TODO: parse this into a time unit somehow
}

export interface ILoggedSet {
    name: string
    exercise: string
    variation?: string
    setType?: SetType  // TODO: link this up with SetType somehow (from string?)
    weight?: IWeight  // TODO: parse this into a weight
    reps: number
    rpe?: number
    sets?: number
    restMinutes?: number // TODO: parse this into a time unit somehow
}
