import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './rocketsPage/Rocket';

function Rockets() {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const err = useSelector((state) => state.rocketsReducer.error);
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
        err === ''
          ? rokcetsList
          : err
      }
    </section>
  );
}

export default Rockets;
