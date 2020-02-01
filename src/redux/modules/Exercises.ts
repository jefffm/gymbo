import { IExercise } from "../types"
import denormalize from "normalizr"

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





// normalized entity reducer
interface IExercises
    extends Readonly<{
        exercises: {
            [exerciseId: number]: IExercise;
        };
    }> { }

function reducer(
    state: IExercises = { exercises: {} },
    action as any,
): IExercises {
    switch (action.type) {
        case "ADD_EXERCISE": {
            return {
                ...state,
                exercises: {
                    ...state.exercises,
                },
            };
        }
        default: {
            return state;
        }
    }
}

function addExercises(exercises: Partial<IExercises>) {
    return {
        type: "ADD_ENTITIES",
        payload: {
            entities,
        },
    };
}

// container component
function mapStateToProps(state: IExercises, _routeProps: any) {
    return {
        post: denormalize(state.entities),
    };
}
