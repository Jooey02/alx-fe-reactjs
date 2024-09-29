import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';

export const searchUsers = async (searchParams, page = 1) => {
  const { username, location, minRepos } = searchParams;
  let query = username;
  
  if (location) {
    query += `+location:${location}`;
  }
  
  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/search/users`, {
      params: {
        q: query,
        per_page: 30,
        page: page
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching users:', error);
    throw new Error('An error occurred while searching for users');
  }
};

export const fetchUserDetails = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw new Error('An error occurred while fetching user details');
  }
};