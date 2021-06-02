import { useEffect, useState } from "react";
import {Button, Form, Modal} from "react-bootstrap";

const RecipeLength = {
    MIN: 1,
};

function EditRecipe(props) {
    const {onShow, setIsShowEditModal, onEditRecipe, recipe, id} = props;

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

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        onEditRecipe(id, editRecipe);
        setIsShowEditModal(false);
    };

    return(
        <Modal show={onShow} onHide={() => {setIsShowEditModal(false)}}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Recipe</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
                    <Form.Group controlId="recipeName">
                        <Form.Label>Recipe Name</Form.Label>
                        <Form.Control type="text" required onChange={setName} defaultValue={recipe.name} placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group controlId="recipeIngredients">
                        <Form.Label>Recipe Ingredients</Form.Label>
                        <Form.Control type="text" required onChange={setIngredients} defaultValue={recipe.ingredients} placeholder="Enter Ingredients(separate by commas)" />
                    </Form.Group>
                    <Button variant="success" type="submit" disabled={isPostDisabled}>Save Recipe</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default EditRecipe;