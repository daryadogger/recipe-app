import 'bootstrap/dist/css/bootstrap.min.css';
import AddRecipe from '../add-recipe/add-recipe';
import './app.css';
import {useState} from "react";
import {Accordion, Button, Container} from "react-bootstrap";
import AccordionItem from "../accordion-item/accordion-item";

function App(props) {
    const {recipesMocks} = props;
    const [isShowModal, setIsShowModal] = useState(false);
    
    let recipes = (typeof localStorage["recipes"] !== "undefined") ? JSON.parse(localStorage.getItem("recipes")) : localStorage.setItem('recipes', JSON.stringify(recipesMocks));

    const handleBtnAddRecipeClick = () => {
        setIsShowModal(true);
    };

    return (

        <Container className="pt-5">
            <h1 className="mb-5 text-center">It's a recipes app! You're welcome!</h1>

            <Accordion className="mb-4">

                {recipes.map((recipe) => <AccordionItem recipes={recipes} recipe={recipe} id={recipe.id} key={`recipe-${recipe.id}`} />)}

            </Accordion>

            <Button variant="info" size="lg" onClick={handleBtnAddRecipeClick}>Add recipe</Button>
            <AddRecipe onShow={isShowModal} setIsShowModal={setIsShowModal} recipes={recipes} />

        </Container>

    );
}

export default App;