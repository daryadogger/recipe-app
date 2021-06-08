import {useState} from "react";
import {getSplitedString} from "../functions/get-splited-string";
import AccordionItemView from "./accordion-item-view";

function AccordionItem(props) {
  const {recipe, recipes, setRecipes, id} = props;
  
  const ingredients = getSplitedString(recipe.ingredients, `,`);

  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const handleBtnEditClick = () => {
    setIsShowEditModal(true);
  };

  const handleBtnDeleteClick = (id) => {
    let _recipes = recipes.slice();
    let recipeIndex = _recipes.findIndex(recipe => recipe.id === id);

    _recipes.splice(recipeIndex, 1);
    localStorage.setItem('recipes', JSON.stringify(_recipes));
};

  return(

    <AccordionItemView id={id} ingredients={ingredients} recipe={recipe} onBtnEditClick={handleBtnEditClick} onBtnDeleteClick={handleBtnDeleteClick}
      recipes={recipes} setRecipes={setRecipes} isShowEditModal={isShowEditModal} setIsShowEditModal={setIsShowEditModal} />

  );
};

export default AccordionItem;