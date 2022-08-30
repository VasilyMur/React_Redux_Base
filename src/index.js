import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux/es/exports';
import { rootReducer } from './redux/rootReducer';
import { spamFilter } from './redux/middleware';

export const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
    spamFilter,
  )
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
