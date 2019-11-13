import { SAVE_GAME, saveGame } from './gameActions';

describe('game actions', () => {
  it('creates a save game action', () => {
    expect(saveGame()).toEqual({
      type: SAVE_GAME
    });
  });
});
