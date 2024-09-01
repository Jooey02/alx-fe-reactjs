import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const RecipeDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { recipe, deleteRecipe, favorites, addFavorite, removeFavorite } = useRecipeStore(state => ({
    recipe: state.recipes.find(r => r.id === parseInt(id)),
    deleteRecipe: state.deleteRecipe,
    favorites: state.favorites,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite
  }))

  if (!recipe) return <div>Recipe not found</div>

  const isFavorite = favorites.includes(recipe.id)

  const handleDelete = () => {
    deleteRecipe(recipe.id)
    navigate('/')
  }

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id)
    } else {
      addFavorite(recipe.id)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <p className="mb-4">{recipe.description}</p>
      <div className="flex space-x-4">
        <button 
          onClick={handleFavorite}
          className={`px-4 py-2 rounded ${isFavorite ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
        <button 
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete Recipe
        </button>
      </div>
    </div>
  )
}

export default RecipeDetails