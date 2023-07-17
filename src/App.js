
// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MealForm from './components/MealForm';
import MealList from './components/MealList';
import PastOrderList from './components/PastOrderHistory';


const App = () => {
  const [recommendedMeals, setRecommendedMeals] = useState([]);
  const [pastOrders, setPastOrders] = useState([]);


  // Function to handle form submission
  const handleSubmit = (preferences) => {
    // Send preferences to the backend API
    axios.post('http://localhost:3001/api/V1/products/recommendations', preferences)
      .then((response) => {
        console.log(response.data)
        setRecommendedMeals(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const fetchPastOrders = () => {
    // Send a request to the backend API to fetch past orders
    axios.get('http://localhost:3001/api/V1/products/getOrderHistory')
      .then((response) => {
        setPastOrders(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Fetch past orders on component mount
  useEffect(() => {
    fetchPastOrders();
  }, []);
  return (
    <div className="max-w-md  mx-auto p-4">
      <h1 className="lg:text-2xl md:text-2xl text-xl font-bold mb-4">User Preference </h1>
      <MealForm onSubmit={handleSubmit} />
      <h1 className="lg:text-2xl md:text-2xl text-xl font-bold mb-4">Meal Recommendations</h1>

      <MealList meals={recommendedMeals} />
      <PastOrderList orders={pastOrders} />

      
    </div>
  );
};

export default App;

