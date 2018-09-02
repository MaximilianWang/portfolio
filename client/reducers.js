/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import core from './core/reducers';

// Combine all reducers into one root reducer
export default combineReducers({
  core,
});
