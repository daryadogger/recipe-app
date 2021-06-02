import { useState } from "react";
import {Accordion, Card, ListGroup, Button, ButtonToolbar} from "react-bootstrap";
import EditRecipe from "../edit-recipe/edit-recipe";

const getListOfIngredients = (string, separator) => {
  return string.split(separator);
};

function AccordionItem(props) {
  const {recipe, onEditRecipe, onDeleteRecipeClick, id} = props;
  const ingredients = getListOfIngredients(recipe.ingredients, `,`);

  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const handleBtnEditRecipeClick = () => {
    setIsShowEditModal(true);
  };

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
            <Button className="mr-2" variant="outline-secondary" size="sm" onClick={handleBtnEditRecipeClick}>Edit</Button>
            <Button variant="outline-danger" size="sm" onClick={() => {onDeleteRecipeClick(id)}}>Delete</Button>
          </ButtonToolbar>

          <EditRecipe onShow={isShowEditModal} setIsShowEditModal={setIsShowEditModal} recipe={recipe} onEditRecipe={onEditRecipe} id={id} />
        </div>
      </Accordion.Collapse>
      
    </Card>

  );
};

export default AccordionItem;