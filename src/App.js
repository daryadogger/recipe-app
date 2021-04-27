import {Accordion, Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {recipes} from './mocks/recipes';
import AccordionItem from './accordion-item/accordion-item';

function App() {
  return (

    <Container className="pt-5">
      <h1 className="mb-5 text-center">It's a recipes app! You're welcome!</h1>

      <Accordion className="mb-4">

        {recipes.map((recipe) => <AccordionItem recipe={recipe} id={recipe.id} key={`recipe-${recipe.id}`} />)}

      </Accordion>

      <Button variant="info" size="lg">Add recipe</Button>

    </Container>

  );
}

export default App;
