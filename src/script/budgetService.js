//Linking to Spring port 4047
import axios from 'axios';

const API_URL = 'http://localhost:4047/budget';

export const createBudget = async (budget) => {
  try {
    const response = await axios.post(`${API_URL}/create`, budget);
    return response.data;
  } catch (error) {
    console.error('Error creating budget:', error);
    throw error;
  }
};

export const getBudgetsByUserId = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching budgets:', error);
    throw error;
  }
};

export const updateBudget = async (budgetId, budget) => {
  try {
    const response = await axios.put(`${API_URL}/update/${budgetId}`, budget);
    return response.data;
  } catch (error) {
    console.error('Error updating budget:', error);
    throw error;
  }
};

export const deleteBudget = async (budgetId) => {
  try {
    await axios.delete(`${API_URL}/delete/${budgetId}`);
  } catch (error) {
    console.error('Error deleting budget:', error);
    throw error;
  }
};
