import React from 'react'
import { Button,Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import "../Components/navbar.css"
import img from "../Assets/searchicon.svg"


function Navbar1() {
  return (
    <div className="navbar">
<Navbar  bg="light" expand="lg">
  <Container fluid>
    <img className="logo" src={require("../Assets/logo1.png")} />
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Q Search Mentor / Employee"
          className="me-2"
          aria-label="Search"
        />
        <Button className='logout_btn' variant="outline-success">Logout</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navbar1