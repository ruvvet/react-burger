import './ingredients.css';

export default function Ingredients({ ingredients, handleClick }) {
  const ingredientButtons = ingredients.map((ingredient, i) => {
    return (
      <button className="btn" onClick={() => handleClick(ingredient)} key={i} style={{ backgroundColor: ingredient.color }}>
        {ingredient.type}
      </button>
    );
  });

  return <div className="ingredient-list">{ingredientButtons}</div>;
}
