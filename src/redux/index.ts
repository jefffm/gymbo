import { combineReducers } from "redux";

import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import weightSettings from "./modules/WeightSettings";
import exercises from "./modules/Exercises";

const rootReducer = combineReducers({
  weightSettings,
  exercises
});

export type AppState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer as any);

export const store = createStore(pReducer);
export const persistor = persistStore(store);
