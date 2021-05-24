import {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";

function AddRecipe(props) {
    const {onShow, setIsShowModal} = props;

    const [recipe, setRecipe] = useState({
        name: ``,
        ingredients: ``,
    });

    const setName = (evt) => setRecipe({...recipe, name: evt.target.value});
    const setIngredients = (evt) => setRecipe({...recipe, ingredients: evt.target.value});

    console.log(recipe)

    const handleFormSubmit = () => {

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

export default AddRecipe;