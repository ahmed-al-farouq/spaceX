import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
  fetchingDataFaild, fetchingDataSucceed, rocketsRudcer, startFetchingData,
} from './rockets/rockets';

const reducer = combineReducers({
  rocketsRudcer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

const getRockets = () => async (dispatch) => {
  dispatch(startFetchingData());
  await fetch('https://api.spacexdata.com/v3/rockets')
    .then((res) => res.json())
    .then((rockets) => {
      const selectedData = [];
      rockets.forEach((rocket) => {
        selectedData.push({
          id: rocket.id,
          name: rocket.rocket_name,
          type: rocket.rocket_type,
          img: rocket.flickr_images,
        });
      });
      dispatch(fetchingDataSucceed(selectedData));
    })
    .catch((err) => dispatch(fetchingDataFaild(err)));
};

store.dispatch(getRockets());
export default store;
