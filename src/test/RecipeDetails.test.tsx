import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RecipeDetails from '../pages/RecipeDetails';

describe('RecipeDetails page', () => {
  test('renders fallback when no recipe is found', () => {
    render(
      <MemoryRouter initialEntries={['/recipe/test-id-nieistnieje']}>
        <RecipeDetails />
      </MemoryRouter>
    );
    expect(screen.getByText(/nie znaleziono przepisu/i)).toBeInTheDocument();
  });
});
