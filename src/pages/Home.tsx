import { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import type { Recipe } from '../types/Recipe';
import data from '../data/recipes.json';

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
  const localData = localStorage.getItem('recipes');
  const fromStorage = localData ? JSON.parse(localData) : [];
  setRecipes([...data, ...fromStorage]);
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
