import { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import Sort from '../components/Sort';
import type { Recipe } from '../types/Recipe';
import data from '../data/recipes.json';

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Wszystkie');

  useEffect(() => {
    const localData = localStorage.getItem('recipes');
    const fromStorage = localData ? JSON.parse(localData) : [];
    setRecipes([...data, ...fromStorage]);
  }, []);

  const filteredRecipes =
    selectedCategory === 'Wszystkie'
      ? recipes
      : recipes.filter((r) => r.category === selectedCategory);

  return (
    <main>
      <Sort selected={selectedCategory} onSelect={setSelectedCategory} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
