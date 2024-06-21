import { useState, useEffect } from 'react';

const API_KEY = "a08d61a020c647619a95134901486c96";
const url = "https://newsapi.org/v2/everything?q=";
const pageSize = 20;

  // Custom hook for fetching news data from the API
function useNewsApi(query, page) {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Async function to fetch news data
    const fetchNews = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`${url}${query}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`);
        if (!res.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await res.json();
        setTotalResults(data.totalResults);
        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [query, page]);

  return { articles, totalResults, isLoading, error };
}

export default useNewsApi;