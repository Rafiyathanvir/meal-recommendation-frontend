import React from 'react';

const PastOrderHistory = ({ orders }) => {
  return (
    <div>
      <h2 className="text-xl font-bold   mb-2">Past Orders</h2>
      {orders.length === 0 ? (
        <p>No past orders found.</p>
      ) : (
        <div className="grid w-[1000px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {orders.map((order) => (
            <div key={order.Id} className="bg-white rounded-md shadow-md p-4">
              <p className="font-bold">Order ID: {order.customerId}</p>
              <p>Meal: {order.meal}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Date: {order.date}</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PastOrderHistory;
