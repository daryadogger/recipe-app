import 'bootstrap/dist/css/bootstrap.min.css';
import AddRecipe from '../add-recipe/add-recipe';
import './app.css';
import {useState} from "react";
import {Accordion, Button, Container} from "react-bootstrap";
import AccordionItem from "../accordion-item/accordion-item";

function App(props) {
    const {recipesMocks} = props;
    const [isShowModal, setIsShowModal] = useState(false);

    // let recipes = (typeof localStorage["recipes"] !== "undefined") ? JSON.parse(localStorage.getItem("recipes")) : recipesMocks;
    // let [recipes, setRecipes] = useState([]);
    let [recipes, setRecipes] = useState(recipesMocks);

    // useEffect(() => {
    //     recipes = (typeof localStorage["recipes"] !== "undefined") ? JSON.parse(localStorage.getItem("recipes")) : recipesMocks;
    // }, [recipes, recipesMocks]);


    const handleBtnAddRecipeClick = () => {
        //очистить форму
        setIsShowModal(true);
    };

    const handleDeleteRecipe = (id) => {
        let _recipes = recipes.slice();
        let recipeIndex = _recipes.findIndex(recipe => recipe.id === id);

        _recipes.splice(recipeIndex, 1);
        setRecipes(_recipes);
        // localStorage.setItem('recipes', JSON.stringify(_recipes));
    };

    const handleAddNewRecipe = (newRecipe) => {
        let _recipes = recipes.slice();
        _recipes.push(newRecipe);
        setRecipes(_recipes);
        // localStorage.setItem('recipes', JSON.stringify(_recipes));
    };

    const handleEditRecipe = (id, editRecipe) => {
        let _recipes = recipes.slice();
        let recipeIndex = _recipes.findIndex(recipe => recipe.id === id);
        _recipes.splice(recipeIndex, 1, editRecipe);
        setRecipes(_recipes);
        // localStorage.setItem('recipes', JSON.stringify(_recipes));
    };

    return (

        <Container className="pt-5">
        <h1 className="mb-5 text-center">It's a recipes app! You're welcome!</h1>

        <Accordion className="mb-4">

            {recipes.map((recipe) => <AccordionItem onEditRecipe={handleEditRecipe} recipe={recipe} id={recipe.id} key={`recipe-${recipe.id}`} onDeleteRecipeClick={handleDeleteRecipe} />)}

        </Accordion>

        <Button variant="info" size="lg" onClick={handleBtnAddRecipeClick}>Add recipe</Button>
        <AddRecipe onShow={isShowModal} setIsShowModal={setIsShowModal} onFormSubmit={handleAddNewRecipe} />

        </Container>

    );
}

export default App;