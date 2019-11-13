import { 
  DRINK_COFFEE, drinkCoffee, 
  EAT_SNACKS, eatSnacks,
  TAKE_NAP, takeNap,
  STUDY, study,
} from './moodActions';

describe('mood actions', () => {
  it('creates a drink coffee action', () => {
    expect(drinkCoffee()).toEqual({
      type: DRINK_COFFEE
    });
  });

  it('creates an eat snacks action', () => {
    expect(eatSnacks()).toEqual({
      type: EAT_SNACKS
    });
  });

  it('creates a take nap action', () => {
    expect(takeNap()).toEqual({
      type: TAKE_NAP
    });
  });

  it('creates a study action', () => {
    expect(study()).toEqual({
      type: STUDY
    });
  });
});
