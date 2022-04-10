import axios from 'axios';

// endpoint for all the Auth @ BackEnd
const API_URL = 'http://localhost:5000/api/users';

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => localStorage.removeItem('user');

const authService = {
  register,
  logout,
};

export default authService;
