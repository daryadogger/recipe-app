import { useState } from "react";
import {Accordion, Card, ListGroup, Button, ButtonToolbar} from "react-bootstrap";
import EditRecipe from "../edit-recipe/edit-recipe";

const getListOfIngridients = (string, separator) => {
  return string.split(separator);
};

function AccordionItem(props) {
  const {recipe, setRecipe, onDeleteRecipeClick, id} = props;
  const ingridients = getListOfIngridients(recipe.ingridients, `,`);

  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const handleBtnEditRecipeClick = () => {
    setIsShowEditModal(true);
  };

  return(

    <Card>

      <Accordion.Toggle as={Card.Header} eventKey={recipe.id + 1} className="d-flex justify-content-between">
        <p className="mb-0">{recipe.title}</p>
      </Accordion.Toggle>

      <Accordion.Collapse eventKey={recipe.id + 1}>
        <div className="p-3">

          <ListGroup className="mb-3">
            {ingridients.map((ingridient) => <ListGroup.Item key={`ingridient-${ingridient}`} >{ingridient}</ListGroup.Item>)}
          </ListGroup>

          <ButtonToolbar>
            <Button className="mr-2" variant="outline-secondary" size="sm" onClick={handleBtnEditRecipeClick}>Edit</Button>
            <Button variant="outline-danger" size="sm" onClick={() => {onDeleteRecipeClick(id)}}>Delete</Button>
          </ButtonToolbar>

          <EditRecipe onShow={isShowEditModal} setIsShowEditModal={setIsShowEditModal} recipe={recipe} setRecipe={setRecipe} />
        </div>
      </Accordion.Collapse>
      
    </Card>

  );
};

export default AccordionItem;