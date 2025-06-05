import { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import type { Recipe } from '../types/Recipe';
import data from '../data/recipes.json';

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // symulacja fetchowania
    setRecipes(data as Recipe[]);
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      padding: '1rem'
    }}>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
