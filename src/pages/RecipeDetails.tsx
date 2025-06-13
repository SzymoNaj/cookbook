import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../data/recipes.json';
import type { Recipe } from '../types/Recipe';

export default function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleDelete = () => {
    const confirmDelete = window.confirm('Czy na pewno chcesz usunąć ten przepis?');
    if (!confirmDelete) return;

    const localData = localStorage.getItem('recipes');
    const recipesFromStorage: Recipe[] = localData ? JSON.parse(localData) : [];

    const updated = recipesFromStorage.filter(r => r.id !== id);
    localStorage.setItem('recipes', JSON.stringify(updated));

    alert('Przepis usunięty.');
    navigate('/');
  };

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
      <div className="recipe-details-container">
        <h1>{recipe.title}</h1>
        <img
          src={new URL(`../assets/images/${recipe.image}`, import.meta.url).href}
          alt={recipe.title}
          className="recipe-image"
        />
        <h3>Składniki:</h3>
        <ul>
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3>Instrukcja:</h3>
        <p>{recipe.instructions}</p>

        <div className="button-group">
          <button className="btn" onClick={() => navigate(-1)}>
            Powrót
          </button>
          <button className="btn" onClick={() => navigate(`/edit/${recipe.id}`)}>
            Edytuj
          </button>
          <button className="btn delete" onClick={handleDelete}>
            Usuń przepis
          </button>
        </div>
      </div>
    </main>
  );
}
