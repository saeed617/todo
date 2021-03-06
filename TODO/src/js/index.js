import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './components/App';
import '../main.css';


window.store = store;

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
)
