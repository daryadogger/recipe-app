import React from 'react';
import {useEffect, useState} from "react";
import {RecipeLength} from "../const";
import EditRecipeModalView from "./edit-recipe-modal-view";

function EditRecipeModal(props) {
    const {onShow, setIsShowEditModal, recipe, id, setRecipes, recipes} = props;

    const [isPostDisabled, setIsPostDisabled] = useState(true);
    const [editRecipe, setEditRecipe] = useState({
        id: recipe.id,
        name: recipe.name,
        ingredients: recipe.ingredients
    });
    const setName = (evt) => setEditRecipe({...editRecipe, name: evt.target.value});
    const setIngredients = (evt) => setEditRecipe({...editRecipe, ingredients: evt.target.value});

    useEffect(() => {
        if (editRecipe.name.length > RecipeLength.MIN && editRecipe.ingredients.length > RecipeLength.MIN) {
            setIsPostDisabled(false);
        } else {
            setIsPostDisabled(true);
        }
    }, [editRecipe]);

    const handleEditRecipe = (id, editRecipe) => {
        let _recipes = recipes.slice();
        let recipeIndex = _recipes.findIndex(recipe => recipe.id === id);

        _recipes.splice(recipeIndex, 1, editRecipe);
        setRecipes(_recipes);
    };

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        
        handleEditRecipe(id, editRecipe);
        setIsShowEditModal(false);
    };

    return(

        <EditRecipeModalView recipe={recipe} onShow={onShow} setIsShowEditModal={setIsShowEditModal} handleFormSubmit={handleFormSubmit} setName={setName}
            setIngredients={setIngredients} isPostDisabled={isPostDisabled} />
        
    );
};

export default EditRecipeModal;