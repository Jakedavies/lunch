 // Use there fetch polyfill
 // The main idea is create a helper in order to handle success/error status
import * as LocationActions from '../actions/LocationActions';
const request = require('superagent');
const baseAPI = 'localhost/api';
const buildURL = function(path) {
  return baseAPI + path;
};
const locations = {
  add(locationData) {
    request
    .post(buildURL('/location'))
    .send(locationData)
    .set('Accept', 'application/json')
    .end(function(err, res) {
      if (err) {
        LocationActions.addError();
      } else {
        LocationActions.addSuccess();
      }
      // Calling the end function will send the request
    });
  },
  all(locationData) {
    request
    .post(buildURL('/location/all'))
    .set('Accept', 'application/json')
    .end(function(err, res) {
      if (err) {
        LocationActions.addError();
      } else {
        LocationActions.addSuccess();
      }
      // Calling the end function will send the request
    });
  },
};

export default locations;
