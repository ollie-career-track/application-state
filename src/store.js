import { createStore } from 'redux';

const initialState = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT_COFFEES':
      return { ...state, coffees: state.coffees + 1 };
    case 'INCREMENT_SNACKS':
      return { ...state, snacks: state.snacks + 1 };
    case 'INCREMENT_NAPS':
      return { ...state, naps: state.naps + 1 };
    case 'INCREMENT_STUDIES':
      return { ...state, studies: state.studies + 1 };
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
