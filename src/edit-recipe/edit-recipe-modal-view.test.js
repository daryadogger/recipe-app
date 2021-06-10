import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EditRecipeModalView from './edit-recipe-modal-view';

describe(`Поведение компонента 'EditRecipeModalView'`, () => {
    it(`Отображает компонент, если в пропс переданы нужные данные`, () => {
        const recipe = {
            id: 2,
            name: `Pizza`,
            ingredients: `Dough, Fresh basil leaves, Pinch red pepper flakes, Mozzarella`
        };
        const handleFormSubmit = jest.fn();
        const setIngredients = jest.fn();
        const setName = jest.fn();
        const onShow = true;
        const setIsShowEditModal = jest.fn(()=> false);
        const isPostDisabled = false;

        const {getByText} = render(
            <EditRecipeModalView onShow={onShow} setIsShowEditModal={setIsShowEditModal} isPostDisabled={isPostDisabled} setName={setName} setIngredients={setIngredients} handleFormSubmit={handleFormSubmit} recipe={recipe} />
        );

        const title = getByText(`Edit Recipe`);
        const buttonText = getByText(`Save Recipe`);

        expect(title).toBeInTheDocument();
        expect(buttonText).toBeInTheDocument();
    });

    it(`Тестирует, что форма есть и в нее можно ввести данные`, () => {
        const recipe = {
            id: 2,
            name: `Pizza`,
            ingredients: `Dough, Fresh basil leaves, Pinch red pepper flakes, Mozzarella`
        };
        const handleFormSubmit = jest.fn();
        const setIngredients = jest.fn();
        const setName = jest.fn();
        const onShow = true;
        const setIsShowEditModal = jest.fn(()=> false);
        const isPostDisabled = false;

        const {getByLabelText, getByTestId} = render(
            <EditRecipeModalView onShow={onShow} setIsShowEditModal={setIsShowEditModal} isPostDisabled={isPostDisabled} setName={setName} setIngredients={setIngredients} handleFormSubmit={handleFormSubmit} recipe={recipe} />
        );

        userEvent.type(getByTestId(`name`), `Lemon pie`);
        userEvent.type(getByTestId(`ingredients`), `Lemon, sugar, water`);

        expect(getByLabelText(`Recipe Name`)).toBeInTheDocument();
        expect(getByLabelText(`Recipe Ingredients`)).toBeInTheDocument();
    });
});
