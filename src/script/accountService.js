import axios from 'axios';

const API_URL = 'http://localhost:4047/account';

export const createAccount = async (account) => {
  try {
    const response = await axios.post(`${API_URL}/create`, account);
    return response.data;
  } catch (error) {
    console.error('Error creating account:', error);
    throw error;
  }
};

export const getAccounts = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching accounts:', error);
    throw error;
  }
};

export const getAccountsByUserId = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching accounts:', error);
    throw error;
  }
};

export const updateAccount = async (accountId, account) => {
  try {
    const response = await axios.put(`${API_URL}/update/${accountId}`, account);
    return response.data;
  } catch (error) {
    console.error('Error updating account:', error);
    throw error;
  }
};

export const deleteAccount = async (accountId) => {
  try {
    await axios.delete(`${API_URL}/delete/${accountId}`);
  } catch (error) {
    console.error('Error deleting account:', error);
    throw error;
  }
};
