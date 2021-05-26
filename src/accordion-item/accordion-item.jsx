import { useState } from "react";
import {Accordion, Card, ListGroup, Button, ButtonToolbar} from "react-bootstrap";
import EditRecipe from "../edit-recipe/edit-recipe";
// import {shallowEqual, useSelector} from 'react-redux';

const getTimeUnits = (time) => {
  if (time > 0 && time <= 1) {
    return ` hour`;
  }

  return ` hours`;
};

const getListOfIngridients = (string, separator) => {
  return string.split(separator);
};

function AccordionItem(props) {
  const {recipe, setRecipe} = props;
  const ingridients = getListOfIngridients(recipe.ingridients, `,`);

  const [isShowEditModal, setIsShowEditModal] = useState(false);

  // const recipes = useSelector((state) => state.recipes.find((el) => el.id === id), shallowEqual);
  // const index = ;
  // const recipes = useSelector((state) => state.recipes.slice().splice(index, 1), shallowEqual);
  // потом обновить массив рецептов в store
  const handleDeleteRecipe = () => {

  };

  const handleBtnEditRecipeClick = () => {
    setIsShowEditModal(true);
  };

  return(

    <Card>

      <Accordion.Toggle as={Card.Header} eventKey={recipe.id + 1} className="d-flex justify-content-between">
        <p className="mb-0">{recipe.title}</p>
        <p className="mb-0">
          {recipe.time + getTimeUnits(recipe.time)}</p>
      </Accordion.Toggle>

      <Accordion.Collapse eventKey={recipe.id + 1}>
        <div className="p-3">

          <ListGroup className="mb-3">
            {ingridients.map((ingridient) => <ListGroup.Item key={`ingridient-${ingridient}`} >{ingridient}</ListGroup.Item>)}
          </ListGroup>

          <ButtonToolbar>
            <Button className="mr-2" variant="outline-secondary" size="sm" onClick={handleBtnEditRecipeClick}>Edit</Button>
            <Button variant="outline-danger" size="sm" onClick={handleDeleteRecipe}>Delete</Button>
          </ButtonToolbar>

          <EditRecipe onShow={isShowEditModal} setIsShowEditModal={setIsShowEditModal} recipe={recipe} setRecipe={setRecipe} />
        </div>
      </Accordion.Collapse>
      
    </Card>

  );
};

export default AccordionItem;