import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    username: '',
    location: '',
    minRepos: ''
  });
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setPage(1);
    try {
      const results = await searchUsers(searchParams, 1);
      setSearchResults(results.items);
    } catch (err) {
      setError('An error occurred while searching for users');
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = async () => {
    setIsLoading(true);
    try {
      const nextPage = page + 1;
      const results = await searchUsers(searchParams, nextPage);
      setSearchResults(prev => [...prev, ...results.items]);
      setPage(nextPage);
    } catch (err) {
      setError('An error occurred while loading more results');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            name="username"
            value={searchParams.username}
            onChange={handleInputChange}
            placeholder="Username"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="location"
            value={searchParams.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="minRepos"
            value={searchParams.minRepos}
            onChange={handleInputChange}
            placeholder="Minimum Repositories"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Search
        </button>
      </form>

      {isLoading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      
      {searchResults.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Search Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map(user => (
              <div key={user.id} className="border rounded-lg p-4 shadow-md">
                <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-center">{user.login}</h3>
                <p className="text-center text-gray-600">{user.location || 'Location not specified'}</p>
                <p className="text-center">Repos: {user.public_repos || 'N/A'}</p>
                <a 
                  href={user.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block mt-4 text-center text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
          {searchResults.length % 30 === 0 && (
            <button 
              onClick={loadMore}
              className="mt-8 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mx-auto block"
            >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;