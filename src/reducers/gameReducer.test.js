import reducer from './gameReducer';
import { resetGame } from '../actions/gameActions';
// import save game 

describe('game reducer', () => {
  const state = {
    coffees: 1,
    snacks: 4,
    naps: 2,
    studies: 3
  };

  it('handles the RESET_GAME action', () => {
    const action = resetGame();
    const newState = reducer(state, action);

    expect(newState).toEqual({
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    });
  });

  it('handles the SAVE_GAME action', () => {

  });
});
