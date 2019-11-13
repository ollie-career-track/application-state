import React from 'react';
import PropTypes from 'prop-types';

const SavedGame = ({ loadGame }) => (
  <button onClick={() => loadGame()}>Load Game</button>
);

SavedGame.propTypes = {
  loadGame: PropTypes.func.isRequired
};

export default SavedGame;
