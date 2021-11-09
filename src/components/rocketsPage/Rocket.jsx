import React from 'react';
import propTypes from 'prop-types';

function Rocket({ name, description, image }) {
  return (
    <div className="rocket">
      <img src={image} alt={name} />
      <div className="content">
        <h2>{name}</h2>
        <p>{description}</p>
        <button type="button">
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
};
export default Rocket;
