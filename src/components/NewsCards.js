import React from 'react';
import NewsCard from './NewsCard';
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

// Component to render a list of news cards
function NewsCards({ articles }) {
  return (
    <div className="cards-container">
      {articles.map((article, index) => (
        // Only render articles with images
        article.urlToImage && <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}

export default React.memo(NewsCards);