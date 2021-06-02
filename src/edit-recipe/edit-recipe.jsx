// import {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";

function EditRecipe(props) {
    const {onShow, setIsShowEditModal, handleEditRecipe, setEditRecipe, editRecipe, recipe, id} = props;

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        // onEditFormSubmit();
        handleEditRecipe(id);
        setIsShowEditModal(false);
    };

    const setName = (evt) => setEditRecipe({...editRecipe, name: evt.target.value});
    console.log(setName)
    const setIngredients = (evt) => setEditRecipe({...editRecipe, ingredients: evt.target.value});

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
                    <Button variant="success" type="submit">Save Recipe</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default EditRecipe;