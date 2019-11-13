import { SAVE_GAME } from '../actions/gameActions';

const initialState = {
  savedGames: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SAVE_GAME:
      return { ...state };
    default:
      return state;
  }
}
