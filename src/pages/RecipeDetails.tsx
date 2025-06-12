import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../data/recipes.json';
import type { Recipe } from '../types/Recipe';

export default function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);

  useEffect(() => {
    const localData = localStorage.getItem('recipes');
    const fromStorage: Recipe[] = localData ? JSON.parse(localData) : [];
    const allRecipes = [...data, ...fromStorage];

    const foundRecipe = allRecipes.find(r => r.id === id);
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p style={{ padding: '1rem' }}>Nie znaleziono przepisu.</p>;
  }

  return (
    <main>
      <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
        <h1>{recipe.title}</h1>
        <img
          src={new URL(`../assets/images/${recipe.image}`, import.meta.url).href}
          alt={recipe.title}
          style={{ width: '100%', borderRadius: '8px', margin: '1rem 0' }}
        />
        <h3>Składniki:</h3>
        <ul>
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3>Instrukcja:</h3>
        <p>{recipe.instructions}</p>
        <button
          onClick={() => navigate(-1)}
          style={{
            marginTop: '2rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#ccc',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Powrót
        </button>
      </div>
    </main>  
  );
}
