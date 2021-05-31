import 'bootstrap/dist/css/bootstrap.min.css';
import AddRecipe from '../add-recipe/add-recipe';
import './app.css';
import {useEffect, useState} from "react";
import {Accordion, Button, Container} from "react-bootstrap";
import AccordionItem from "../accordion-item/accordion-item"

const RecipeLength = {
    MIN: 1,
};

function App(props) {
    const {recipesMocks} = props;
    const [isShowModal, setIsShowModal] = useState(false);
    const [isPostDisabled, setIsPostDisabled] = useState(true);

    const [recipes, setRecipes] = useState(recipesMocks);
    const [newRecipe, setNewRecipe] = useState({
        name: ``,
        ingredients: ``
    });

    useEffect(() => {
        if (newRecipe.name.length > RecipeLength.MIN && newRecipe.ingredients.length > RecipeLength.MIN) {
        setIsPostDisabled(false);
        } else {
        setIsPostDisabled(true);
        }
    }, [newRecipe]);

    const handleBtnAddRecipeClick = () => {
        setIsShowModal(true);
    };

    const handleDeleteRecipe = (id) => {
        let newArr = recipes.slice();
        newArr.splice(id, 1)
        setRecipes(newArr);
    };

    const handleAddNewRecipe = () => {
        let newArr = recipes.slice();
        newArr.concat([{
        id: 4,
        name: `sss`,
        ingredients: `sdsd`
        }]);
        setRecipes(newArr);

        console.log(recipes);
    };

    return (

        <Container className="pt-5">
        <h1 className="mb-5 text-center">It's a recipes app! You're welcome!</h1>

        <Accordion className="mb-4">

            {recipes.map((recipe) => <AccordionItem setRecipes={setRecipes} recipe={recipe} id={recipe.id} key={`recipe-${recipe.id}`} onDeleteRecipeClick={handleDeleteRecipe} />)}

        </Accordion>

        <Button variant="info" size="lg" onClick={handleBtnAddRecipeClick}>Add recipe</Button>
        <AddRecipe onShow={isShowModal} setIsShowModal={setIsShowModal} isPostDisabled={isPostDisabled} newRecipe={newRecipe} setNewRecipe={setNewRecipe} onFormSubmit={handleAddNewRecipe} />

        </Container>

    );
}

export default App;