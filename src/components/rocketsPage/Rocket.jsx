import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket } from '../../redux/rockets/rockets';

function Rocket({
  name, description, image, id,
}) {
  const dispatch = useDispatch();
  const booking = (id) => {
    dispatch(bookRocket(id));
  };
  return (
    <div className="rocket">
      <img src={image} alt={name} />
      <div className="content">
        <h2>{name}</h2>
        <p>
          {description}
        </p>
        <button type="button" onClick={() => booking(id)}>
          Reserve Rocket
        </button>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
};
export default Rocket;
