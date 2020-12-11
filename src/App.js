import Burger from './components/Burger';
import Ingredients from './components/Ingredients';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [burger, setBurger] = useState([]);
  const [type, setType] = useState('')
  const [color, setColor] = useState('')

  const [ingredients, setIngredients] = useState([
    { type: 'Kaiser Bun', color: 'saddlebrown' },
    { type: 'Sesame Bun', color: 'sandybrown' },
    { type: 'Gluten Free Bun', color: 'peru' },
    { type: 'Lettuce Wrap', color: 'olivedrab' },
    { type: 'Beef Patty', color: '#3F250B' },
    { type: 'Soy Patty', color: '#3F250B' },
    { type: 'Black Bean Patty', color: '#3F250B' },
    { type: 'Chicken Patty', color: 'burlywood' },
    { type: 'Lettuce', color: 'lawngreen' },
    { type: 'Tomato', color: 'tomato' },
    { type: 'Bacon', color: 'maroon' },
    { type: 'Onion', color: 'lightyellow' },
  ]);

  const handleIngredientClick = (ingredient) => {
    setBurger([ingredient, ...burger]);
  };

  const deleteIngredient = (index) => {
    // let newburg = burger;
    // let newthing = newburg.splice(index, 1);
    //??????????????????
    const firstburger = burger.slice(0, index);
    const secondburger = burger.slice(index + 1, burger.length + 1);

    setBurger(firstburger.concat(secondburger));
  };

  const clearBurger = () => {
    setBurger([]);
  };

  const addIngredient = () => {
    const newIngredient = {type: type, color: `#${color}`}

    setIngredients([...ingredients, newIngredient])
  };

  return (
    <div className="App">
      <h1> BURGER STACKER</h1>
      <div className="ingredients">
        <Ingredients
          ingredients={ingredients}
          handleClick={handleIngredientClick}
        />


<p>
        <input
          name="type"
          value={type}
          onChange={(evt) => setType(evt.target.value)}
          type="text"
          placeholder="type"
        ></input>
      </p>
      <p>
        <input
          name="color"
          value={color}
          onChange={(evt) => setColor(evt.target.value)}
          type="text"
          placeholder="color"
        ></input>
      </p>
      <button onClick={addIngredient}>ADD</button>


      </div>
      <div className="burger">
        <Burger burger={burger} deleteIngredient={deleteIngredient} />
        <button onClick={() => clearBurger()}> CLEAR </button>
      </div>







    </div>
  );
}

export default App;
