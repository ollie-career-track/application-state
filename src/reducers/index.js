import { combineReducers } from 'redux';
import moods from './moodReducer';
import game from './gameReducer';

export default combineReducers({
  moods,
  game
});
