import React, {useState} from 'react'
import {Navbar, Nav} from "react-bootstrap"

const NavigationBar = ({searchKeyword}) => {
 
    return (
        <div>
            <Navbar className="mb-6" bg="primary" expand="lg" variant="dark">
  <Navbar.Brand href="#">PhotoLibrary</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto mt-2 my-lg-0 "
      style={{ 
        maxHeight: '100px'
     }}
      navbarScroll>
      <Nav.Link href="#action1">Saved</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default NavigationBar
