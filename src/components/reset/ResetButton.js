import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResetButton.css';

const ResetButton = ({ handleClick }) => (
  <button className={styles.ResetButton} onClick={() => handleClick()}>Reset Game</button>
);

ResetButton.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default ResetButton;
