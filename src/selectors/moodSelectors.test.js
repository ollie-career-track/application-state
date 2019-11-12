import { getCoffees, getSnacks, getNaps, getStudies } from './moodSelectors';

describe('mood selectors', () => {
  const state = {
    coffees: 1,
    snacks: 4,
    naps: 2,
    studies: 3
  };

  it('can get coffees', () => {
    const coffees = getCoffees(state);
    expect(coffees).toEqual(1);
  });

  it('can get snacks', () => {
    const snacks = getSnacks(state);
    expect(snacks).toEqual(4);
  });

  it('can get naps', () => {
    const naps = getNaps(state);
    expect(naps).toEqual(2);
  });

  it('can get studies', () => {
    const studies = getStudies(state);
    expect(studies).toEqual(3);
  });
});
