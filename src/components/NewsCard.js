import React, { useMemo } from 'react';
import { Card } from 'react-bootstrap';
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


// Component to render a single news card
function NewsCard({ article }) {
  // Memoize the date formatting
  const formattedDate = useMemo(() => {
    return new Date(article.publishedAt).toLocaleString("en-US", {
      timeZone: "Asia/Jakarta"
    });
  }, [article.publishedAt]);

// Handle click on the card
  const handleClick = () => {
    window.open(article.url, "_blank");
  };

  return (
    <Card onClick={handleClick}>
      <Card.Img variant="top" src={article.urlToImage} alt="news-image" />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{`${article.source.name} · ${formattedDate}`}</Card.Subtitle>
        <Card.Text>{article.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default React.memo(NewsCard);