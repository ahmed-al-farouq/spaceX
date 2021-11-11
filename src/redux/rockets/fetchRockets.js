import { fetchingDataSucceed, startFetchingData, fetchingDataFaild } from './rockets';

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
          desc: rocket.description,
        });
      });
      dispatch(fetchingDataSucceed(selectedData));
    })
    .catch((err) => dispatch(fetchingDataFaild(err)));
};

export default getRockets;
