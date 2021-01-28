import { combineReducers } from 'redux';
import * as FeedsState from './Feeds';

const rootReducer = combineReducers({
  feeds: FeedsState.feedReducer,
});

export { rootReducer, FeedsState };
