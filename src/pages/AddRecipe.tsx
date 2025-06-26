import { useState } from 'react';

export default function AddRecipe() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!title || !category || !ingredients || !instructions || !image) {
    alert('Uzupełnij wszystkie pola!');
    return;
  }

  const nowyPrzepis = {
    id: Date.now().toString(),
    title,
    category,
    ingredients: ingredients.split(',').map(i => i.trim()),
    instructions,
    image
  };

  //Pobieranie obecnych przepisów z localStorage
  const zapisane = localStorage.getItem('recipes');
  const parsed = zapisane ? JSON.parse(zapisane) : [];

  //Dodawanie nowego przepisu zapis
  parsed.push(nowyPrzepis);
  localStorage.setItem('recipes', JSON.stringify(parsed));

  alert('Przepis dodany!');

  // Czyszczenie formularza
  setTitle('');
  setCategory('');
  setIngredients('');
  setInstructions('');
  setImage('');
};


  return (
    <main>
      <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
        <h2>Dodaj nowy przepis</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Tytuł"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="">Wybierz kategorię</option>
            <option value="Śniadanie">Śniadanie</option>
            <option value="Obiad">Obiad</option>
            <option value="Kolacja">Kolacja</option>
            <option value="Deser">Deser</option>
          </select>
          <textarea
            placeholder="Składniki (oddzielone przecinkiem)"
            value={ingredients}
            onChange={e => setIngredients(e.target.value)}
          />
          <textarea
            placeholder="Instrukcja przygotowania"
            value={instructions}
            onChange={e => setInstructions(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nazwa pliku obrazka (np. carbonara.jpg)"
            value={image}
            onChange={e => setImage(e.target.value)}
          />
          <button type="submit" className="btn">
            Dodaj przepis
          </button>
        </form>
      </div>
    </main>
  );
}

