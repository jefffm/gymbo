import { combineReducers } from 'redux'

import weightSettings from './WeightSettings'
import exercises from './Exercises'

export default combineReducers({
    weightSettings,
    exercises
})
