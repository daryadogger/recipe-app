import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

function EditRecipeModalView(props) {
    const {onShow, setIsShowEditModal, handleFormSubmit, recipe, setIngredients, setName, isPostDisabled} = props;

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

export default EditRecipeModalView;