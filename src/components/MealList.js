import React from 'react';

const MealList = ({ meals }) => {
  return (
    <div className="grid w-[1000px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {meals.length === 0 ? (
        <p>No meal recommendations found for the given preferences.</p>
      ) : (
        meals.map((meal) => (
          <div key={meal.id} className="bg-white rounded-md shadow-md p-4">
            <h3 className="text-lg font-bold mb-2">{meal.name}</h3>
            <p className="mb-2">Rating: {meal.rating}</p>
            <p className="mb-2">Description: {meal.description}</p>
            <p className="mb-2">Dietary Preferences: {meal.dietaryPreferences}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MealList;
