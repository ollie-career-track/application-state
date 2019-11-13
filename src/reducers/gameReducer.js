import { RESET_GAME } from '../actions/gameActions';
// import save game action

const initialState = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0
};

// saved game state?

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case RESET_GAME:
      return { coffees: 0, snacks: 0, naps: 0, studies: 0 };
    default:
      return state;
  }
}

// case save game
