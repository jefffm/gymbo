import { combineReducers } from 'redux'

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import weightSettings from './WeightSettings'
import exercises from './Exercises'
import rootReducer from './reducers'

const reducer = combineReducers({
    weightSettings,
    exercises
})


export type AppState = ReturnType<typeof rootReducer>

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, rootReducer as any);

export const store = createStore(pReducer)
export const persistor = persistStore(store)
