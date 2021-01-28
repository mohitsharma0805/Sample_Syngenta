import { createSlice } from '@reduxjs/toolkit';

const updateFeedReducer = (state, action) => {
  state.feedList = action.payload;
  state.isRefreshing = false;
};

const updateRefreshingReducer = (state, action) => {
  state.isRefreshing = action.payload;
};

// REDUCER
const feedSlice = createSlice({
  name: 'feeds',
  initialState: {
    feedList: [],
    isRefreshing: false,
  },
  reducers: {
    updateFeed: updateFeedReducer,
    updateRefreshing: updateRefreshingReducer,
  },
});

// ACTIONS
const { updateFeed, updateRefreshing } = feedSlice.actions;

// SELECTOR
const selectFeed = ({ feeds }) => feeds.feedList;

const selectRefresh = ({ feeds }) => feeds.isRefreshing;

const feedReducer = feedSlice.reducer;

export { feedReducer, selectFeed, updateFeed, updateRefreshing, selectRefresh };
