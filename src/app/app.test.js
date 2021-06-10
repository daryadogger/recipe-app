import React from 'react';
import {Container} from 'react-bootstrap';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './app.jsx';

describe(`Поведение компонента 'App'`, () => {
	it(`Отображает компонент`, () => {
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

		const renderer = new ShallowRenderer();
		const result = renderer.render(
			<App recipesMocks={recipes} />
		);

		expect(result.type).toBe(Container);
	});
});