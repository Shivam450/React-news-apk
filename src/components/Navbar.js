import React, { useState, useCallback } from 'react';
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'react-bootstrap';

// Navigation component with search functionality
function Navbar({ onSearch, onNavItemClick, activeNavItem }) {
  const [searchText, setSearchText] = useState('');


  // Handle form submission for search
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (searchText) {
      onSearch(searchText);
    }
  }, [searchText, onSearch]);

   // Handle search input change
  const handleSearchChange = useCallback((e) => {
    setSearchText(e.target.value);
  }, []);

  return (
    <BootstrapNavbar bg="light" expand="lg">
        {/* Navbar brand */}
      <BootstrapNavbar.Brand href="#" style={{ fontSize: 'larger', fontWeight: 'bolder' }}>NEWS</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* Home link */}
          <Nav.Link href="#" onClick={() => window.location.reload()}>Home</Nav.Link>
          {/*Category dropdown */}
          <NavDropdown title="All Categories" id="basic-nav-dropdown">
            {['Business', 'Technology', 'Entertainment'].map((category) => (
              <NavDropdown.Item 
                key={category}
                href="#" 
                onClick={() => onNavItemClick(category)} 
                active={activeNavItem === category}
              >
                {category}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
         {/* Search form */}
        <Form inline onSubmit={handleSubmit} className="d-flex ms-auto">
          <FormControl 
            type="text" 
            placeholder="Search" 
            className="mr-sm-2" 
            value={searchText} 
            onChange={handleSearchChange} 
          />
          <Button variant="outline-success" type="submit">Search</Button>
        </Form>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default React.memo(Navbar);