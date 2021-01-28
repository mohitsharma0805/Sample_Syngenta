import { takeLatest, call, put } from 'redux-saga/effects';
import { feedService } from '../service';
import { FeedsState } from '../state';

/**
 * get feedlist
 * @param {Object} action - contains type and payload
 */
export function* getFeeds(action) {
  const apiResponse = yield call(feedService.getFeeds, action.payload);

  if (apiResponse?.status === 'success') {
    const data = apiResponse?.response?.children[0].children.filter((obj) => obj.name === 'item');
    yield put(FeedsState.updateFeed(data));
  }
}

/**
 * Watch get feed function
 */
export function* watchGetFeeds() {
  yield takeLatest('GET_FEEDS', getFeeds);
}
