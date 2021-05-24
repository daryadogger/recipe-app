import {Accordion, Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {recipes} from './mocks/recipes';
import AccordionItem from './accordion-item/accordion-item';
import {useState} from 'react';
import AddRecipe from './add-recipe/add-recipe';

function App() {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleBtnAddRecipeClick = () => {
    setIsShowModal(true);
  };

  return (

    <Container className="pt-5">
      <h1 className="mb-5 text-center">It's a recipes app! You're welcome!</h1>

      <Accordion className="mb-4">

        {recipes.map((recipe) => <AccordionItem recipe={recipe} id={recipe.id} key={`recipe-${recipe.id}`} />)}

      </Accordion>

      <Button variant="info" size="lg" onClick={handleBtnAddRecipeClick}>Add recipe</Button>
      <AddRecipe onShow={isShowModal} setIsShowModal={setIsShowModal} />

    </Container>

  );
}

export default App;
