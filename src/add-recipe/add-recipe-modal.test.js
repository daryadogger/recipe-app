import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import AddRecipeModalView from './add-recipe-modal-view.jsx';
import AddRecipeModal from './add-recipe-modal.jsx';

describe(`Поведение компонента 'AddRecipeModal'`, () => {
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
        const setRecipes = jest.fn(()=> []);
        const onShow = true;
        const setIsShowModal = jest.fn(()=> true);

        const renderer = new ShallowRenderer();
        const result = renderer.render(
            <AddRecipeModal recipes={recipes} setIsShowModal={setIsShowModal} setRecipes={setRecipes} onShow={onShow} />
        );

        expect(result.type).toBe(AddRecipeModalView);
    });
});