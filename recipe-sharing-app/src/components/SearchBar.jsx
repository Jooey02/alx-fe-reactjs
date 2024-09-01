import React from 'react'
import useRecipeStore from './recipeStore'

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm)

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded"
    />
  )
}

export default SearchBar