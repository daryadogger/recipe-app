import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddRecipeModalView from './add-recipe-modal-view.jsx';

describe(`Поведение компонента 'AddRecipeModalView'`, () => {
    it(`Отображает компонент, если в пропс переданы нужные данные`, () => {
        const newRecipe = {
            id: 2,
            name: `Pizza`,
            ingredients: `Dough, Fresh basil leaves, Pinch red pepper flakes, Mozzarella`
        };
        const onFormSubmit = jest.fn();
        const setIngredients = jest.fn();
        const setName = jest.fn();
        const onShow = true;
        const setIsShowModal = jest.fn(()=> false);
        const isPostDisabled = false;

        const {getByText} = render(
            <AddRecipeModalView onShow={onShow} setIsShowModal={setIsShowModal} isPostDisabled={isPostDisabled} setName={setName} setIngredients={setIngredients} onFormSubmit={onFormSubmit} newRecipe={newRecipe} />
        );

        const title = getByText(`New Recipe`);
        const buttonText = getByText(`Save Recipe`);
        
        expect(title).toBeInTheDocument();
        expect(buttonText).toBeInTheDocument();
    });

    it(`Тестирует, что форма есть и в нее можно ввести данные`, () => {
        const newRecipe = {
            id: 2,
            name: `Pizza`,
            ingredients: `Dough, Fresh basil leaves, Pinch red pepper flakes, Mozzarella`
        };
        const onFormSubmit = jest.fn();
        const setIngredients = jest.fn();
        const setName = jest.fn();
        const onShow = true;
        const setIsShowModal = jest.fn(()=> false);
        const isPostDisabled = false;

        const {getByLabelText, getByTestId} = render(
            <AddRecipeModalView onShow={onShow} setIsShowModal={setIsShowModal} isPostDisabled={isPostDisabled} setName={setName} setIngredients={setIngredients} onFormSubmit={onFormSubmit} newRecipe={newRecipe} />

        );

        userEvent.type(getByTestId(`name`), `Lemon pie`);
        userEvent.type(getByTestId(`ingredients`), `Lemon, sugar, water`);

        expect(getByLabelText(`Recipe Name`)).toBeInTheDocument();
        expect(getByLabelText(`Recipe Ingredients`)).toBeInTheDocument();
    });
});
