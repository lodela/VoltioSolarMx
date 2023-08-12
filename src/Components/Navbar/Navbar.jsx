import { useState } from "react";
import "./Navbar.scss";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/VoltioSolarMx_Navbar-Brand.svg";
import PropTypes from "prop-types";
export const VoltioNavbar = ({ user }) => {
  const [expanded, setExpanded] = useState(false);
  const handleCloseSesion = (e) => {
    console.log(e);
  };
  return (
    <Navbar
      expanded={expanded}
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="bg-body-secondary mainNav"
    >
      <Container className="container">
        <Navbar.Brand>
          <NavLink
            to="/"
            className="nav-link"
            onClick={() => setExpanded(false)}
          >
            <img src={logo} height="40" className="d-inline-block align-top" />
            VoltioSolar.Mx
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <NavLink
              to="/"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/nosotros"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/blog"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/cotizar"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Cotizar
            </NavLink>
          </Nav>
          <Nav className="ml-auto">
            {!user ? (
              <NavLink className="nav-link login">Entrar / Registrarse</NavLink>
            ) : (
              <NavDropdown title={`Hola: ${user}`}>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleCloseSesion}>
                  Cerrar Sesión
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

VoltioNavbar.propTypes = {
  user: PropTypes.string,
};
