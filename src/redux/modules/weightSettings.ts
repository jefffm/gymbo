import { IAvailablePlates } from "../../util/PlateCalculator";
import { WeightUnit } from "../../util/Weight";
export const STATE_KEY = "weightSettings";

export interface IWeightSettings
  extends Readonly<{
    unit: WeightUnit;
    availablePlates: IAvailablePlates;
  }> {}

const initialState: IWeightSettings = {
  unit: WeightUnit.POUNDS,
  availablePlates: {
    100: 2,
    45: 5,
    35: 0,
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
  return state;
};
export default weightSettings;
