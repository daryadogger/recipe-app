import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './report-web-vitals';
import {recipes} from './mocks/recipes';
import App from './app/app.jsx';

ReactDOM.render(
  <App recipesMocks={recipes} />,
  document.getElementById('root')
);

reportWebVitals();
