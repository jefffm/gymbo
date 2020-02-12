import { SET_ACTIVE_WORKOUT } from "../actions";
export const STATE_KEY = "activeWorkout";

export type nullableId = number | id;

const activeWorkout = (
    state: nullableId,
    action: any
): nullableId => {
    switch (action.type) {
        case SET_ACTIVE_WORKOUT: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
export default activeWorkout;
