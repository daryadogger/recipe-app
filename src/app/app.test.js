import React from 'react';
import {render} from '@testing-library/react';
import App from './app.jsx';

it(`Отображает компонент App`, () => {
  const recipes = [
    {
      id: 0,
      name: `Beef & Broccoli`,
      ingredients: `Beef, Broccoli, Cream, Salt, Paper`
    },
    {
      id: 1,
      name: `Banana milkshake`,
      ingredients: `Bananas, Milk, Ice cream`
    },
    {
      id: 2,
      name: `Pizza`,
      ingredients: `Dough, Fresh basil leaves, Pinch red pepper flakes, Mozzarella`
    },
  ];

  const {getByText} = render(
      <App recipesMocks={recipes} />
  );

  const title = getByText(/It's a recipes app! You're welcome!/i);
  expect(title).toBeInTheDocument();
});