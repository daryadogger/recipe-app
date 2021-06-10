import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import AccordionItemView from './accordion-item-view.jsx';
import AccordionItem from './accordion-item.jsx';

describe(`Поведение компонента 'AccordionItem'`, () => {
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
        const id = 1;
        const recipe = {
            id: 2,
            name: `Pizza`,
            ingredients: `Dough, Fresh basil leaves, Pinch red pepper flakes, Mozzarella`
        };
        const setRecipes = jest.fn(()=> []);

        const renderer = new ShallowRenderer();
        const result = renderer.render(
            <AccordionItem recipes={recipes} id={id} recipe={recipe} setRecipes={setRecipes} />
        );

        expect(result.type).toBe(AccordionItemView);
    });
});