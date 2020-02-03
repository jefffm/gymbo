import { combineReducers } from "redux";

import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import weightSettings from "./modules/weightSettings";
import loggedWorkouts, {
  STATE_KEY as LOGGED_WORKOUT_STATE_KEY
} from "./modules/loggedWorkout";
import exercises, {
  STATE_KEY as EXERCISE_STATE_KEY
} from "./modules/exercises";
import workoutTemplates, {
  STATE_KEY as WORKOUT_TEMPLATE_STATE_KEY
} from "./modules/workoutTemplates";

export const rootReducer = combineReducers({
  weightSettings: weightSettings,
  [WORKOUT_TEMPLATE_STATE_KEY]: workoutTemplates,
  [EXERCISE_STATE_KEY]: exercises,
  [LOGGED_WORKOUT_STATE_KEY]: loggedWorkouts
});
// continue following https://github.com/paularmstrong/normalizr/tree/master/examples/redux/src/redux/

export type AppState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer as any);

export const store = createStore(pReducer);
export const persistor = persistStore(store);
