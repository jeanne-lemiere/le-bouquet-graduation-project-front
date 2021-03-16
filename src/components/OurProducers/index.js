import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Card from './SellerCard';

// les props sont recupérées des containers
const OurProducers = ({ producers }) => (
  <div className="our-sellers">
    <h1 className="our-sellers__title">Nos producteurs</h1>
    <ul className="our-sellers__list">

      {producers.map((producer) => (
        <Card
          key={producer.id}
          {...producer}
        />
      ))}

    </ul>
  </div>
);
OurProducers.propTypes = {
  producers: PropTypes.any,
};

export default OurProducers;
