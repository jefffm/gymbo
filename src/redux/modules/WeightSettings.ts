import { IAvailablePlates } from "../../util/PlateCalculator";
import { WeightUnit } from "../../util/Weight";

export interface IWeightSettings {
  unit: WeightUnit;
  availablePlates: IAvailablePlates;
}

const initialState: IWeightSettings = {
  unit: WeightUnit.POUNDS,
  availablePlates: {
    45: 4,
    35: 2,
    25: 2,
    10: 2,
    5: 1,
    2.5: 1,
    1.25: 1
  }
};

const weightSettings = (
  state: IWeightSettings = initialState,
  action: any
): IWeightSettings => {
  // TODO: add plate, remove plate, update unit, update barWeight
  return state;
};
export default weightSettings;
