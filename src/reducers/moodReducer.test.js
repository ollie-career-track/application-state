import reducer from './moodReducer';
import { drinkCoffee, eatSnacks, takeNap, study, resetGame } from '../actions/moodActions';

describe('mood reducer', () => {
  const state = {
    coffees: 1,
    snacks: 4,
    naps: 2,
    studies: 3
  };

  it('handles an unknown action', () => {
    const newState = reducer(undefined, { type: '@@INIT' });

    expect(newState).toEqual({
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    });
  });

  it('handles the DRINK_COFFEE action', () => {
    const action = drinkCoffee();
    const newState = reducer(state, action);

    expect(newState).toEqual({
      ...state,
      coffees: 2
    });
  });

  it('handles the EAT_SNACKS action', () => {
    const action = eatSnacks();
    const newState = reducer(state, action);

    expect(newState).toEqual({
      ...state,
      snacks: 5
    });
  });

  it('handles the TAKE_NAP action', () => {
    const action = takeNap();
    const newState = reducer(state, action);

    expect(newState).toEqual({
      ...state,
      naps: 3
    });
  });

  it('handles the STUDY action', () => {
    const action = study();
    const newState = reducer(state, action);

    expect(newState).toEqual({
      ...state,
      studies: 4
    });
  });

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
});
