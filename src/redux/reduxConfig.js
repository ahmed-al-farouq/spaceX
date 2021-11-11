import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rocketsReducer } from './rockets/rockets';
import missionsReducer from './missions/missions';
import getRockets from './rockets/fetchRockets';

const reducer = combineReducers({
  rocketsReducer,
  missions: missionsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

store.dispatch(getRockets());
export default store;
