import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'

function App() {
  return (
    <Router>
      <div className="App max-w-4xl mx-auto p-4">
        <nav className="mb-4 flex justify-between items-center">
          <div>
            <Link to="/" className="mr-4 text-blue-500 hover:underline">Home</Link>
            <Link to="/add" className="mr-4 text-blue-500 hover:underline">Add Recipe</Link>
            <Link to="/favorites" className="mr-4 text-blue-500 hover:underline">Favorites</Link>
            <Link to="/recommendations" className="text-blue-500 hover:underline">Recommendations</Link>
          </div>
          <SearchBar />
        </nav>

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App