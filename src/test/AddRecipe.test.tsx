import { render, screen } from '@testing-library/react';
import AddRecipe from '../pages/AddRecipe';

describe('AddRecipe page', () => {
  test('renders title input', () => {
    render(<AddRecipe />);
    expect(screen.getByPlaceholderText(/tytuł/i)).toBeInTheDocument();
  });

  test('renders submit button', () => {
    render(<AddRecipe />);
    expect(screen.getByText(/dodaj przepis/i)).toBeInTheDocument();
  });
});
