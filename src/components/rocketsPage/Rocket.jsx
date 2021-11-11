import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelRokcet } from '../../redux/rockets/rockets';

function Rocket({
  name, description, image, reserved, id,
}) {
  const dispatch = useDispatch();
  const booking = (id) => {
    dispatch(bookRocket(id));
  };
  const cancelBooking = (id) => {
    dispatch(cancelRokcet(id));
  };
  return (
    <div className="rocket">
      <img src={image} alt={name} data-testid="img" />
      <div className="content">
        <h2 data-testid="name">{name}</h2>
        <p data-testid="description">
          {
          reserved
            && (
              <span className="reserved">
                Reserved
              </span>
            )
          }
          {description}
        </p>
        {
          reserved
            ? (
              <button type="button" className="cancel-reservation" onClick={() => cancelBooking(id)}>
                Cancel Reservation
              </button>
            )
            : (
              <button type="button" onClick={() => booking(id)}>
                Reserve Rocket
              </button>
            )
        }
      </div>
    </div>
  );
}

Rocket.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  reserved: propTypes.bool.isRequired,
  id: propTypes.number.isRequired,
};
export default Rocket;
