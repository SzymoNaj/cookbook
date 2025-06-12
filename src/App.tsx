import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddRecipe from './pages/AddRecipe';
import Contact from './pages/Contact';
import RecipeDetails from './pages/RecipeDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
