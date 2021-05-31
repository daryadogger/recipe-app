import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {recipes} from './mocks/recipes';

ReactDOM.render(
  <App recipesMocks={recipes} />,
  document.getElementById('root')
);

reportWebVitals();
