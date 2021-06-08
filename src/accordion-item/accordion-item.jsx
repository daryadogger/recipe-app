import React, {useCallback} from 'react';
import {useState} from "react";
import {getSplitedString} from "../functions/get-splited-string";
import AccordionItemView from "./accordion-item-view";

function AccordionItem(props) {
  const {recipe, setRecipes, id} = props;
  
  const ingredients = getSplitedString(recipe.ingredients, `,`);

  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const handleBtnEditClick = useCallback(() => {
    setIsShowEditModal(!isShowEditModal);
  }, [isShowEditModal]);

  const handleBtnDeleteClick = (id) => {
    let _recipes = JSON.parse(localStorage.getItem('recipes')).slice();
    let recipeIndex = _recipes.findIndex(recipe => recipe.id === id);
    
    _recipes.splice(recipeIndex, 1);
    setRecipes(_recipes);
  };

  return(

    <AccordionItemView id={id} ingredients={ingredients} recipe={recipe} onBtnEditClick={handleBtnEditClick} onBtnDeleteClick={handleBtnDeleteClick}
      setRecipes={setRecipes} isShowEditModal={isShowEditModal} setIsShowEditModal={setIsShowEditModal} />

  );
};

export default AccordionItem;