import { Accordion, Card, ListGroup } from "react-bootstrap";

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
  const {recipe} = props;
  const ingridients = getListOfIngridients(recipe.ingridients, `,`);

  return(

    <Card>

      <Accordion.Toggle as={Card.Header} eventKey={recipe.id + 1} className="d-flex justify-content-between">
        <p className="mb-0">{recipe.title}</p>
        <p className="mb-0">
          {recipe.time + getTimeUnits(recipe.time)}</p>
      </Accordion.Toggle>

      <Accordion.Collapse eventKey={recipe.id + 1}>
        <ListGroup>

          {ingridients.map((ingridient) => <ListGroup.Item key={`ingridient-${ingridient}`} >{ingridient}</ListGroup.Item>)}

        </ListGroup>
      </Accordion.Collapse>
      
    </Card>

  );
};

export default AccordionItem;