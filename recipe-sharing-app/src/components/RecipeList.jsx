import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'
import SearchBar from './SearchBar'

const RecipeList = () => {
  const { filteredRecipes, filterRecipes } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes,
    filterRecipes: state.filterRecipes
  }))

  useEffect(() => {
    filterRecipes()
  }, [filterRecipes])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recipes</h2>
      <SearchBar />
      {filteredRecipes.length === 0 ? (
        <p className="mt-4">No recipes found. Try a different search term.</p>
      ) : (
        filteredRecipes.map(recipe => (
          <div key={recipe.id} className="mt-4 p-4 border border-gray-200 rounded">
            <h3 className="text-xl font-semibold">
              <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">
                {recipe.title}
              </Link>
            </h3>
            <p className="mt-2">{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default RecipeList