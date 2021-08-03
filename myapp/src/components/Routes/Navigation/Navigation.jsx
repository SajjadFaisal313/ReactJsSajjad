import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/Courses">Courses</NavLink>
            <NavLink to="/Services">Services</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
            <NavLink to="/AboutUs">AboutUs</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
