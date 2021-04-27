import {Accordion, Button, Card, Container, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {recipes} from './mocks/recipes';

function App() {
  return (
    <Container className="pt-5">
      <h1 className="mb-5 text-center">It's a recipes app! You're welcome!</h1>

      <Accordion className="mb-4">

        {recipes.map((recipe) => 
          <Card id={recipe.id} key={`recipe-${recipe.id}`}>

            <Accordion.Toggle as={Card.Header} eventKey={recipe.id + 1} className="d-flex justify-content-between">
              <p className="mb-0">{recipe.title}</p>
              <p className="mb-0">
                {recipe.time + ` hours`}</p>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey={recipe.id + 1}>
              <ListGroup>
                <ListGroup.Item>{recipe.ingridients}</ListGroup.Item>
              </ListGroup>
            </Accordion.Collapse>
            
          </Card>
        )}

      </Accordion>

      <Button variant="info" size="lg">Add recipe</Button>

    </Container>

  );
}

export default App;
