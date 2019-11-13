import React from 'react';
import PropTypes from 'prop-types';

const ResetButton = ({ handleClick }) => (
  <button onClick={() => handleClick()}>Reset Game</button>
);

ResetButton.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default ResetButton;
