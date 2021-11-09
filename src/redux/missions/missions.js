const URL = 'https://api.spacexdata.com/v3/missions';
const LOAD_MISSIONS = 'missions/load';
const JOIN_MISSION = 'missions/join';

const loadMissions = (payload) => ({
  type: LOAD_MISSIONS,
  payload,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const fetchMissions = async (dispatch) => {
  const response = await fetch(URL);
  const missions = await response.json();

  dispatch(loadMissions(missions.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
  }))));
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return action.payload;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }
        return {
          ...mission,
          reserved: true,
        };
      });
    default:
      return state;
  }
};

export default reducer;
