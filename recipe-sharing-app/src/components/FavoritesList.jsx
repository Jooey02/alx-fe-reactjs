// src/components/FavoritesList.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const FavoritesList = () => {
  const { recipes, favorites, removeFavorite } = useRecipeStore(state => ({
    recipes: state.recipes,
    favorites: state.favorites,
    removeFavorite: state.removeFavorite
  }))

  const favoriteRecipes = favorites.map(id => recipes.find(recipe => recipe.id === id))

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>You haven't added any favorites yet.</p>
      ) : (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id} className="mb-4 p-4 border border-gray-200 rounded">
            <h3 className="text-xl font-semibold">
              <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">
                {recipe.title}
              </Link>
            </h3>
            <p className="mt-2">{recipe.description}</p>
            <button 
              onClick={() => removeFavorite(recipe.id)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove from Favorites
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default FavoritesList