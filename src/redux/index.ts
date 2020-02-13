import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import activeWorkoutId, {
  STATE_KEY as ACTIVE_WORKOUT_STATE_KEY
} from "./modules/activeWorkoutId";
import weightSettings, {
  STATE_KEY as WEIGHT_SETTINGS_STATE_KEY
} from "./modules/weightSettings";
import workouts, { STATE_KEY as WORKOUT_STATE_KEY } from "./modules/workouts";
import exercises, {
  STATE_KEY as EXERCISE_STATE_KEY
} from "./modules/exercises";
import workoutTemplates, {
  STATE_KEY as WORKOUT_TEMPLATE_STATE_KEY
} from "./modules/workoutTemplates";
import bars, { STATE_KEY as BARS_STATE_KEY } from "./modules/bars";

export const rootReducer = combineReducers({
  [ACTIVE_WORKOUT_STATE_KEY]: activeWorkoutId,
  [WEIGHT_SETTINGS_STATE_KEY]: weightSettings,
  [WORKOUT_TEMPLATE_STATE_KEY]: workoutTemplates,
  [EXERCISE_STATE_KEY]: exercises,
  [WORKOUT_STATE_KEY]: workouts,
  [BARS_STATE_KEY]: bars
});

export type AppState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer as any);

export const store = createStore(pReducer, devToolsEnhancer({}));
export const persistor = persistStore(store);
