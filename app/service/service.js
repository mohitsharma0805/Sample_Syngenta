import axios from 'axios';

export async function callApi(authOptions) {
  const returnVal = {};
  let responsecode = {};
  await axios(authOptions)
    .then((res) => {
      const XMLParser = require('react-xml-parser');
      const json = new XMLParser().parseFromString(res.data);
      returnVal.status = 'success';
      returnVal.response = json;
      responsecode = returnVal;
    })
    .catch((error) => {
      returnVal.status = 'fail';
      returnVal.response = error.response.data;
      responsecode = returnVal;
    });

  return responsecode;
}

export const apiRequest = ({ apiUrl, method, payload }) => {
  let authOptions = {
    method,
    url: apiUrl,
    data: payload,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    json: true,
  };
  if (method === 'GET') {
    authOptions = {
      method,
      url: apiUrl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      json: true,
    };
  }
  return callApi(authOptions);
};
