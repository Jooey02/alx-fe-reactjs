import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Title is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required';
    if (!steps) newErrors.steps = 'Steps are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Submit the form data to your backend API
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Recipe Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 ${errors.title ? 'border-red-500' : ''}`}
          required
        />
        {errors.title && <p className="text-red-500 mt-1">{errors.title}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-gray-700 font-bold mb-2">
          Ingredients
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 ${errors.ingredients ? 'border-red-500' : ''}`}
          required
        />
        {errors.ingredients && <p className="text-red-500 mt-1">{errors.ingredients}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="steps" className="block text-gray-700 font-bold mb-2">
          Preparation Steps
        </label>
        <textarea
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 ${errors.steps ? 'border-red-500' : ''}`}
          required
        />
        {errors.steps && <p className="text-red-500 mt-1">{errors.steps}</p>}
      </div>
      <div className="text-center">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add Recipe
        </button>
      </div>
    </form>
  );
}

export default AddRecipeForm;