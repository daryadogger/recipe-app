import { Button, Form, Modal } from "react-bootstrap";

function AddRecipeView(props) {
    const {onFormSubmit, onShow, setIngredients, setName, setIsShowModal, newRecipe, isPostDisabled} = props;

    return(

        <Modal show={onShow} onHide={() => {setIsShowModal(false)}}>
            <Modal.Header closeButton>
                <Modal.Title>New Recipe</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form action="#" className="add-review__form" onSubmit={onFormSubmit}>
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

export default AddRecipeView;