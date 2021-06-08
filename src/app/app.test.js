import React from 'react';
import {render} from '@testing-library/react';
import App from './app.jsx';

it(`Отображает компонент App`, () => {
  const {getByText} = render(
      <App />
  );

  expect(getByText(/It's a recipes app! You're welcome!/i)).toBeInTheDocument();
});