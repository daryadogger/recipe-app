import React from 'react';
import {render} from '@testing-library/react';
import AccordionItemView from "./accordion-item-view";

describe(`Поведение компонента 'AccordionItemView'`, () => {
    it(`Отображает компонент, если в пропс переданы нужные данные`, () => {
        const recipe = {
            id: 2,
            name: `Pizza`,
            ingredients: `Dough, Fresh basil leaves, Pinch red pepper flakes, Mozzarella`
        };
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
        const ingredients = [`Dough`, `Fresh basil leaves`, `Pinch red pepper flakes`, `Mozzarella`];
        const onBtnEditClick = jest.fn();
        const onBtnDeleteClick = jest.fn(() => 4);
        const setRecipes = jest.fn();
        const id = 2;
        const isShowEditModal = true;
        const setIsShowEditModal = jest.fn(() => false);

        const {getByText} = render(
            <AccordionItemView recipe={recipe} recipes={recipes} id={id} ingredients={ingredients} onBtnEditClick={onBtnEditClick} onBtnDeleteClick={onBtnDeleteClick} setRecipes={setRecipes} isShowEditModal={isShowEditModal} setIsShowEditModal={setIsShowEditModal} />
        );

        const title = getByText(recipe.name);
        const buttonText = getByText(`Delete`);
        
        expect(title).toBeInTheDocument();
        expect(buttonText).toBeInTheDocument();
    });
});
