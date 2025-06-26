import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { Recipe } from '../types/Recipe';
import data from '../data/recipes.json';

export default function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const localData = localStorage.getItem('recipes');
    const fromStorage: Recipe[] = localData ? JSON.parse(localData) : [];

    const allRecipes = [...data, ...fromStorage];

    const found = allRecipes.find((r) => r.id === id);
    if (found) setRecipe(found);
  }, [id]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    if (!recipe) return;
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!recipe) return;

    const localData = localStorage.getItem('recipes');
    let allRecipes = localData ? JSON.parse(localData) : [];

    // Nadpisuje przepis w localStorage
    const updated = allRecipes.map((r: Recipe) => (r.id === recipe.id ? recipe : r));
    localStorage.setItem('recipes', JSON.stringify(updated));
    alert('Przepis zaktualizowany!');
    navigate('/');
  }

  if (!recipe) return <p style={{ padding: '1rem' }}>Ładowanie...</p>;

  return (
    <form onSubmit={handleSave} style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Edytuj przepis</h2>

      <input
        type="text"
        name="title"
        value={recipe.title}
        onChange={handleChange}
        placeholder="Tytuł"
        required
      />

      <select name="category" value={recipe.category} onChange={handleChange}>
        <option>Śniadanie</option>
        <option>Obiad</option>
        <option>Kolacja</option>
      </select>

      <input
        type="text"
        name="image"
        value={recipe.image}
        onChange={handleChange}
        placeholder="Nazwa pliku obrazka"
      />

      <textarea
        name="ingredients"
        value={recipe.ingredients.join(',')}
        onChange={(e) =>
          setRecipe({ ...recipe, ingredients: e.target.value.split(',') })
        }
      />

      <textarea
        name="instructions"
        value={recipe.instructions}
        onChange={handleChange}
      />

      <button type="submit" className="btn">Zapisz zmiany</button>
    </form>
  );
}
