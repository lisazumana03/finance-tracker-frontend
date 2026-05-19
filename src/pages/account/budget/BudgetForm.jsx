import React from 'react';
import './BudgetForm.css';

export default function BudgetForm() {
  return (
    <div>
      <h1>Budget Form</h1>
        <form id='budget-form' className='budget-form'>
            //User fieid is locked as the user is the one creating the budget, so we can get the user id from the token and set it in the backend
            <label> Limit: </label> //This is a field that requires double input, so we can use a number input field    
            <input type="number" step="0.01" required />
            <label> Category: </label>
            <input type="text" required />
            <button type="submit">Create Budget</button>
        </form>
    </div>
  );
}