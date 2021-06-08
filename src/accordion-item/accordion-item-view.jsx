import React from 'react';
import {Accordion, Button, ButtonToolbar, Card, ListGroup} from "react-bootstrap";
import EditRecipe from "../edit-recipe/edit-recipe";

function AccordionItemView(props) {
    const {recipe, ingredients, onBtnEditClick, onBtnDeleteClick, recipes, setRecipes, id, isShowEditModal, setIsShowEditModal} = props;

    return(

        <Card>

        <Accordion.Toggle as={Card.Header} eventKey={recipe.id + 1} className="d-flex justify-content-between">
            <p className="mb-0">{recipe.name}</p>
        </Accordion.Toggle>

        <Accordion.Collapse eventKey={recipe.id + 1}>
            <div className="p-3">

            <ListGroup className="mb-3">
                {ingredients.map((ingridient) => <ListGroup.Item key={`ingridient-${ingridient}`} >{ingridient}</ListGroup.Item>)}
            </ListGroup>

            <ButtonToolbar>
                <Button className="mr-2" variant="outline-secondary" size="sm" onClick={onBtnEditClick}>Edit</Button>
                <Button variant="outline-danger" size="sm" onClick={() => {onBtnDeleteClick(id)}}>Delete</Button>
            </ButtonToolbar>

            <EditRecipe onShow={isShowEditModal} setIsShowEditModal={setIsShowEditModal} recipe={recipe} recipes={recipes} setRecipes={setRecipes} id={id} />
            </div>
        </Accordion.Collapse>
        
        </Card>

    );
};

export default AccordionItemView;