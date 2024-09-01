// src/components/RecommendationsList.jsx
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const RecommendationsList = () => {
  const { recommendations, generateRecommendations, addFavorite } = useRecipeStore(state => ({
    recommendations: state.recommendations,
    generateRecommendations: state.generateRecommendations,
    addFavorite: state.addFavorite
  }))

  useEffect(() => {
    generateRecommendations()
  }, [generateRecommendations])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available at the moment.</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} className="mb-4 p-4 border border-gray-200 rounded">
            <h3 className="text-xl font-semibold">
              <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">
                {recipe.title}
              </Link>
            </h3>
            <p className="mt-2">{recipe.description}</p>
            <button 
              onClick={() => addFavorite(recipe.id)}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add to Favorites
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default RecommendationsList