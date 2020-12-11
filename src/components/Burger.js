import './burger.css';

export default function Burger({ burger, deleteIngredient }) {
  const createBurger = burger.map((ingredient, i) => {
    return (
     <div
        className="ingredients-display"
        style={{ backgroundColor: ingredient.color }}
        key={i}
      >
        {ingredient.type}<button class="x-btn" onClick={() => deleteIngredient(i)}>X</button>
      </div>

    );
  });

  return <div className="burger-display">{createBurger}</div>;
}
