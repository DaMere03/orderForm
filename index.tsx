import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function OrderForm() {
  const [order, setOrder] = useState('');
  const [food, recordFood] = useState('');
  const [toppings, recordToppings] = useState('');

  function foodChange(e) {
    recordFood(e.target.value);
  }

  function toppingsChange(e) {
    recordToppings(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setOrder(
      <p>
        {food} with {toppings}
      </p>
    );
  }

  return (
    <form id="orderForm" onSubmit={handleSubmit}>
      <input
        type="food"
        value={food}
        onChange={foodChange}
        placeholder="Food"
      />
      <br />
      <br />
      <input
        type="toppings"
        value={toppings}
        onChange={toppingsChange}
        placeholder="Toppings (Ex: 1, 2, 3, etc.)"
      />
      <br />
      <br />
      <input type="submit" value="Add Food" onSubmit="return false" />
      <p> Your Order: {order}</p>
    </form>
  );
}

root.render(
  <StrictMode>
    <App />
    <OrderForm />
  </StrictMode>
);
