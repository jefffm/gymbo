import { kilosToPounds, poundsToKilos } from "./Math";

export enum WeightUnit {
    KILO,
    POUNDS
}

export interface IWeight {
    unit: WeightUnit,
    value: number
    asUnit(unit: WeightUnit): number
}

export class Kilos implements IWeight {
    unit: WeightUnit = WeightUnit.KILO
    value: number

    constructor(value: number) {
        this.value = value
    }

    asUnit(unit: WeightUnit): number {
        switch (unit) {
            case WeightUnit.KILO:
                return this.value;
            case WeightUnit.POUNDS:
                return kilosToPounds(this.value);
        }
    }
}

export class Pounds implements IWeight {
    unit: WeightUnit = WeightUnit.KILO
    value: number

    constructor(value: number) {
        this.value = value
    }

    asUnit(unit: WeightUnit): number {
        switch (unit) {
            case WeightUnit.KILO:
                return poundsToKilos(this.value);
            case WeightUnit.POUNDS:
                return this.value;
        }
    }
}