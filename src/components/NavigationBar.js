import React from 'react'
import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from "react-bootstrap"

const NavigationBar = () => {
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
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      
      
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default NavigationBar
