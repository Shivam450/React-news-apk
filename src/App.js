import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import NewsCards from './components/NewsCards';
import Pagination from './components/Pagination';
import useNewsApi from './hooks/useNewsApi';
import './App.css';
import './index.css';

// This is the main component of the application
// It manages the overall state and composition of the app

function App() {
  // State for search query, current page, and active navigation item
  const [query, setQuery] = useState("India");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeNavItem, setActiveNavItem] = useState(null);

   // Custom hook to fetch news data
  const { articles, totalResults, isLoading, error } = useNewsApi(query, currentPage);

  // Callback functions for search, navigation, and pagination
  const handleSearch = useCallback((searchQuery) => {
    setQuery(searchQuery);
    setCurrentPage(1);
    setActiveNavItem(null);
  }, []);

  const handleNavItemClick = useCallback((id) => {
    setQuery(id);
    setCurrentPage(1);
    setActiveNavItem(id);
  }, []);

  const handlePageChange = useCallback((newPage) => {
    setCurrentPage(newPage);
  }, []);

    // Error handling
  if (error) {
    return <div>Error: {error}</div>;
  }

    // Render the main application structure
  return (
    <div className="App">
      <Navbar 
        onSearch={handleSearch} 
        onNavItemClick={handleNavItemClick}
        activeNavItem={activeNavItem}
      />
      <main>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <NewsCards articles={articles} />
        )}
      </main>
      <Pagination 
        currentPage={currentPage} 
        totalResults={totalResults} 
        pageSize={20} 
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;