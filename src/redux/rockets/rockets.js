const START_FETCHING_DATA = 'START_FETCHING_DATA';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_FAILD = 'FETCH_DATA_SUCCESS';

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
    default:
      return state;
  }
};
