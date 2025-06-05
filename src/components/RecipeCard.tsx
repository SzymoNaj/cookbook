import type { Recipe } from '../types/Recipe';
import { Link } from 'react-router-dom';

interface Props {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: Props) {
  return (
    <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        maxWidth: '300px',
        backgroundColor: '#1f1f1f'
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
    </Link>
  );
}


