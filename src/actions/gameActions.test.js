import {
  RESET_GAME, resetGame
  // import save
} from './gameActions';

describe('game actions', () => {
  it('creates a reset game action', () => {
    expect(resetGame()).toEqual({
      type: RESET_GAME
    });
  });

  it('creates a save game action', () => {

  });
});
