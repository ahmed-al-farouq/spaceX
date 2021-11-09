/* eslint-disable no-unused-expressions */
/* eslint-disable no-case-declarations */
const START_FETCHING_DATA = 'START_FETCHING_DATA';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_FAILD = 'FETCH_DATA_SUCCESS';
const ROCKET_BOOKED = 'ROCKET_BOOKED';

const initState = {
  rockets: [],
  loading: false,
  error: '',
};

export const startFetchingData = () => ({
  type: START_FETCHING_DATA,
});

export const fetchingDataSucceed = (rockets) => ({
  type: FETCH_DATA_SUCCESS,
  payload: rockets,
});

export const fetchingDataFaild = (err) => ({
  type: FETCH_DATA_SUCCESS,
  payload: err,
});

export const bookRocket = (id) => ({
  type: ROCKET_BOOKED,
  payload: id,
});

export const rocketsRudcer = (state = initState, action) => {
  switch (action.type) {
    case START_FETCHING_DATA:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        rockets: action.payload,
      };
    case FETCH_DATA_FAILD:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ROCKET_BOOKED:
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) { return rocket; }
        return { ...rocket, reserved: true };
      });

      return {
        ...state,
        rockets: newState,
      };
    default:
      return state;
  }
};
