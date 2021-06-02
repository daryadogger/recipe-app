import {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const getUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
};

const RecipeLength = {
    MIN: 1,
};

function AddRecipe(props) {
    const {onShow, setIsShowModal, onFormSubmit} = props;

    const [newRecipe, setNewRecipe] = useState({
        id: ``,
        name: ``,
        ingredients: ``
    });
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

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        // evt.target.reset();
        let uniqueId = getUniqueId();
        setNewRecipe({...newRecipe, id: uniqueId});
        onFormSubmit(newRecipe);
        setIsShowModal(false);
    };

    return(
        <Modal show={onShow} onHide={() => {setIsShowModal(false)}}>
            <Modal.Header closeButton>
                <Modal.Title>New Recipe</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
                    <Form.Group controlId="recipeName">
                        <Form.Label>Recipe Name</Form.Label>
                        <Form.Control type="text" required onChange={setName} defaultValue={newRecipe.name} placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group controlId="recipeIngredients">
                        <Form.Label>Recipe Ingredients</Form.Label>
                        <Form.Control type="text" required onChange={setIngredients} defaultValue={newRecipe.ingredients} placeholder="Enter Ingredients(separate by commas)" />
                    </Form.Group>
                    <Button variant="success" type="submit" disabled={isPostDisabled}>Save Recipe</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddRecipe;