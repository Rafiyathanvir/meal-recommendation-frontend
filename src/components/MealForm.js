// MealForm.js
import React, { useState } from 'react';

const MealForm = ({ onSubmit }) => {
  const [preferences, setPreferences] = useState({
    dietaryPreferences: '',
    cuisineType: '',
    spicinessLevel: '',
    mealCategory: '',
  });
 
  
  // Function to handle preference changes
  const handlePreferenceChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Include form fields for dietary preferences, cuisine types, spiciness, and meal categories */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium" htmlFor="dietaryPreferences">
          Dietary Preferences
        </label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          name="dietaryPreferences"
          id="dietaryPreferences"
          value={preferences.dietaryPreferences}
          onChange={handlePreferenceChange}
        >
          <option value="">Any</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="Non-vegetarian">Non-vegetarian</option>

          {/* Add more options as needed */}
        </select>
      </div>

      {/* Cuisine Type */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium" htmlFor="cuisineType">
          Cuisine Type
        </label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          name="cuisineType"
          id="cuisineType"
          value={preferences.cuisineType}
          onChange={handlePreferenceChange}
        >
          <option value="">Any</option>
          <option value="Italian">Italian</option>
          <option value="mexican">Mexican</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Spiciness Level */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium" htmlFor="spicinessLevel">
          Spiciness Level
        </label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          name="spicinessLevel"
          id="spicinessLevel"
          value={preferences.spicinessLevel}
          onChange={handlePreferenceChange}
        >
          <option value="">Any</option>
          <option value="Mild">Mild</option>
          <option value="medium">Medium</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Meal Category */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium" htmlFor="mealCategory">
          Meal Category
        </label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          name="mealCategory"
          id="mealCategory"
          value={preferences.mealCategory}
          onChange={handlePreferenceChange}
        >
          <option value="">Any</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="Dinner">Dinner</option>

          {/* Add more options as needed */}
        </select>
      </div>

      {/* Add more form fields for other preferences */}

      <button
        className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
        type="submit"
      >
        Get Recommendations
      </button>
    </form>
  );
};

export default MealForm;
