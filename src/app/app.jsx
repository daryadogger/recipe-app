import React, {useCallback} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddRecipeModal from '../add-recipe/add-recipe-modal';
import './app.css';
import {useState} from "react";
import {Accordion, Button, Container} from "react-bootstrap";
import AccordionItem from "../accordion-item/accordion-item";
import {useLocalStorage} from '../hooks/use-local-storage';

function App(props) {
    const {recipesMocks} = props;
    
    const [isShowModal, setIsShowModal] = useState(false);
    const [recipes, setRecipes] = useLocalStorage("recipes", recipesMocks);

    const handleBtnAddRecipeClick = useCallback(() => {
        setIsShowModal(!isShowModal);
    }, [isShowModal]);

    return (

        <Container className="pt-5">
            <h1 className="mb-5 text-center">It's a recipes app! You're welcome!</h1>

            <Accordion className="mb-4">

                {recipes.map((recipe) => <AccordionItem recipe={recipe} id={recipe.id} key={`recipe-${recipe.id}`} recipes={recipes} setRecipes={setRecipes} />)}

            </Accordion>

            <Button variant="info" size="lg" onClick={handleBtnAddRecipeClick}>Add recipe</Button>
            <AddRecipeModal onShow={isShowModal} setIsShowModal={setIsShowModal} setRecipes={setRecipes} recipes={recipes} />

        </Container>

    );
}

export default App;