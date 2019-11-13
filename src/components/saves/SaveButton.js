import React from 'react';
import PropTypes from 'prop-types';
import styles from './SaveButton.css';

const SaveButton = ({ handleSave }) => (
  <button className={styles.SaveButton} onClick={() => handleSave()}>Save Game</button>
);

SaveButton.propTypes = {
  handleSave: PropTypes.func.isRequired
};

export default SaveButton;
