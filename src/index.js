import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './reset.css';
import { Provider } from 'react-redux';
import store from './store';

render(
  <Provider>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);
