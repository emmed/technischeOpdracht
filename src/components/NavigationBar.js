import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
// import DarkModeToggle from "react-dark-mode-toggle";

function NavigationBar() {
  return (
    <div>
      <Navbar className="mb-6" bg="primary" expand="lg" variant="dark">
        <Navbar.Brand href="#">PhotoLibrary</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto container-fluid mt-2 my-lg-0 "
            style={{
              maxHeight: "100px",
            }}
            navbarScroll
          >
            <Nav.Link href="">Favorieten</Nav.Link>
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
