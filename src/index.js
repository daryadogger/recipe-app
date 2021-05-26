import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reduser} from './store/reduser';
import { recipes } from './mocks/recipes';

const store = createStore(
  reduser,
  composeWithDevTools()
);

ReactDOM.render(
  <Provider store={store} >
    <App recipes={recipes} />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
