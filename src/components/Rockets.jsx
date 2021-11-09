import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './rocketsPage/Rocket';

function Rockets() {
  const rockets = useSelector((state) => state.rocketsRudcer.rockets);
  const rokcetsList = [];
  const displayRockets = () => {
    rockets.forEach((rocket) => {
      rokcetsList.push(
        <Rocket
          key={rocket.id}
          name={rocket.name}
          description={rocket.desc}
          image={rocket.img[0]}
          reserved={
            rocket.reserved !== undefined
              ? rocket.reserved : false
          }
          id={rocket.id}
        />,
      );
    });
  };
  displayRockets();
  return (
    <section className="rockets">
      {
        rokcetsList
      }
    </section>
  );
}

export default Rockets;
