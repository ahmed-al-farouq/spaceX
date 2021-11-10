import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true && rocket);
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
    </section>
  );
}

export default Profile;
