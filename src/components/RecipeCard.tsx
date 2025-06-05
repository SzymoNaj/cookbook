import type { Recipe } from '../types/Recipe';

interface Props {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: Props) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      maxWidth: '300px'
    }}>
      <div style={{ height: '200px', overflow: 'hidden', borderRadius: '8px' }}>
        <img
          src={new URL(`../assets/images/${recipe.image}`, import.meta.url).href}
          alt={recipe.title}
        style={{ width: '100%', objectFit: 'cover', height: '100%' }}
        />
      </div>
      <h3>{recipe.title}</h3>
      <p><strong>Kategoria:</strong> {recipe.category}</p>
    </div>
  );
}
