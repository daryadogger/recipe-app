import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import EditRecipeModalView from './edit-recipe-modal-view.jsx';
import EditRecipeModal from './edit-recipe-modal.jsx';

describe(`Поведение компонента 'EditRecipeModal'`, () => {
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
        const id = 2;
        const recipe = {
            id: 2,
            name: `Pizza`,
            ingredients: `Dough, Fresh basil leaves, Pinch red pepper flakes, Mozzarella`
        };
        const setRecipes = jest.fn(()=> []);
        const onShow = true;
        const setIsShowEditModal = jest.fn(()=> true);

        const renderer = new ShallowRenderer();
        const result = renderer.render(
            <EditRecipeModal recipes={recipes} recipe={recipe} id={id} setIsShowEditModal={setIsShowEditModal} setRecipes={setRecipes} onShow={onShow} />
        );

        expect(result.type).toBe(EditRecipeModalView);
    });
});