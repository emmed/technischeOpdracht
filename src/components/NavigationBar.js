import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// import DarkModeToggle from "react-dark-mode-toggle";
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'

function NavigationBar() {
  return (
    <div>
      <Navbar className="mb-6" bg="primary" expand="lg" variant="dark">
        <Navbar.Brand>
        <Link to="/" style={{color: "white", textDecoration: 'none'}}>
          PhotoLibrary</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto container-fluid mt-2 my-lg-0 "
            style={{
              maxHeight: "100 px",
            }}
            navbarScroll
          >
            <Nav.Link >
              <Link to="/favorieten"  style={{color: "white", textDecoration: 'none'}}>Favorieten</Link></Nav.Link>
            {/* <Button variant="info" onClick={() => props.themeToggle()}>click me!</Button> */}

            {/* <DarkModeToggle
                     onClick={() => themeToggle()}
                      onChange={setIsDarkMode}
                     checked={isDarkMode}
                       size={65}
                        /> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
