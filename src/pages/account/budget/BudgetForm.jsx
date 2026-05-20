import React from 'react';
import './BudgetForm.css';
import { createBudget } from '../../../script/budgetService';

export default function BudgetForm() {

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const budgetData = {
            limit: parseFloat(formData.get('limit')),
            category: formData.get('category'),
            userId: 1 // Placeholder user ID, replace with actual user ID from auth context
        };
        try {
            const newBudget = await createBudget(budgetData);
            console.log('Budget created:', newBudget);
            // Optionally, redirect to budgets page or show success message
        } catch (error) {
            console.error('Error creating budget:', error);
            // Optionally, show error message to user
        }
    };

    // Code to catch anything below 0,00
    const handleLimitChange = (event) => {
        const limit = parseFloat(event.target.value);
        if (limit < 0) {
            event.target.value = 0;
        }
    };

  return (
    <div>
      <h1>Budget Form</h1>
        <form id='budget-form' className='budget-form' onSubmit={handleSubmit}>
            <label> Limit: </label> 
            <input type="number" step="0.01" required onChange={handleLimitChange} />
            <label> Category: </label>
            <input type="text" required />
            <button type="submit">Create Budget</button>
        </form>
    </div>
  );
}