export const DRINK_COFFEE = 'DRINK_COFFEE';
export const drinkCoffee = coffees => ({
  type: DRINK_COFFEE,
  payload: coffees
});

export const EAT_SNACKS = 'EAT_SNACKS';
export const eatSnacks = snacks => ({
  type: EAT_SNACKS,
  payload: snacks
});

export const TAKE_NAP = 'TAKE_NAP';
export const takeNap = naps => ({
  type: TAKE_NAP,
  payload: naps
});

export const STUDY = 'STUDY';
export const study = studies => ({
  type: STUDY,
  payload: studies
});

export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({
  type: RESET_GAME
});
