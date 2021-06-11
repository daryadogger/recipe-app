import React from 'react';
import {useEffect, useState} from 'react';
import {RecipeLength} from '../const';
import {getUniqueId} from '../functions/get-unique-id';
import AddRecipeModalView from './add-recipe-modal-view';

function AddRecipeModal(props) {
    const {onShow, setIsShowModal, setRecipes, recipes} = props;

    const [newRecipe, setNewRecipe] = useState({
        id: getUniqueId(),
        name: ``,
        ingredients: ``
    });
    console.log(newRecipe)
    const [isPostDisabled, setIsPostDisabled] = useState(true);

    const setName = (evt) => setNewRecipe({...newRecipe, name: evt.target.value});
    const setIngredients = (evt) => setNewRecipe({...newRecipe, ingredients: evt.target.value});

    useEffect(() => {
        if (newRecipe.name.length > RecipeLength.MIN && newRecipe.ingredients.length > RecipeLength.MIN) {
            setIsPostDisabled(false);
        } else {
            setIsPostDisabled(true);
        }
    }, [newRecipe]);

    const handleAddNewRecipe = (newRecipe) => {
        let _recipes = recipes.slice();

        _recipes.push(newRecipe);
        setRecipes(_recipes);

        setNewRecipe({
            id: getUniqueId(),
            name: ``,
            ingredients: ``
        });
    };

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        
        setNewRecipe({...newRecipe, id: getUniqueId()});
        console.log(getUniqueId())
        handleAddNewRecipe(newRecipe);
        setIsShowModal(false);
    };

    return(
        
        <AddRecipeModalView onFormSubmit={handleFormSubmit} onShow={onShow} setName={setName} setIngredients={setIngredients} setIsPostDisabled={setIsPostDisabled}
            setIsShowModal={setIsShowModal} newRecipe={newRecipe} isPostDisabled={isPostDisabled} />
            
    );
};

export default AddRecipeModal;