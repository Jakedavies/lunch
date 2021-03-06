import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { reducer as formReducer } from 'redux-form';
import { items } from './items';
import { locations } from './locations';
import { nominations } from './nominations';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routeReducer,
  /* your reducers */
  locations,
  nominations,
});

export default rootReducer;
