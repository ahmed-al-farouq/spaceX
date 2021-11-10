import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';

function Profile() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissions);
    }
  }, []);

  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true && rocket);
  const reservedMissions = missions.filter((mission) => mission.reserved === true && mission);
  return (
    <section className="profile">
      <div className="reserved-rockets">
        {
        reservedRockets.length
          ? (
            <>
              <h2>My Rockets</h2>
              <ul>
                {reservedRockets.map((rocket) => (
                  <li key={rocket.id}>
                    {rocket.name}
                  </li>
                ))}
              </ul>

            </>
          )
          : (
            <h2 className="none-reserved">There are no rockets reserved</h2>
          )
      }
      </div>
      <div className="reserved-rockets">
        {
        reservedMissions.length
          ? (
            <>
              <h2>My Missions</h2>
              <ul>
                {reservedMissions.map((mission) => (
                  <li key={mission.id}>
                    {mission.name}
                  </li>
                ))}
              </ul>

            </>
          )
          : (
            <h2 className="none-reserved">There are no missions reserved</h2>
          )
      }
      </div>
    </section>
  );
}

export default Profile;
