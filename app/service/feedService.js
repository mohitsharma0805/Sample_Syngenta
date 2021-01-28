import { RSS_FEED } from './apiUrls';

import { apiRequest } from './service';

export const getFeeds = (payload) => {
  return apiRequest({
    apiUrl: RSS_FEED,
    payload,
    method: 'GET',
  });
};
