import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Prosta walidacja
    if (!name || !email || !message) {
      setError('Wszystkie pola są wymagane.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Wprowadź poprawny adres email.');
      return;
    }

    // Można tu dodać wysyłkę np. do emaila lub API
    setSuccess('Wiadomość została wysłana!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <main>
      <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
        <h2>Formularz kontaktowy</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Imię i nazwisko"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Adres email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Twoja wiadomość"
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows={5}
          ></textarea>
          <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#ddd', border: 'none' }}>
            Wyślij
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
        </form>
      </div>
    </main>
  );
}

