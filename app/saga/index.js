import { all, fork } from 'redux-saga/effects';
import { watchGetFeeds } from './FeedSaga';

export default function* rootSaga() {
  yield all([fork(watchGetFeeds)]);
}
