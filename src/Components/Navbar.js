import React from "react";
import { Link } from "react-router-dom";
import logo from "../Containers/Home/images/Sans titre (1).png"; // Tell webpack this JS file uses this image
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
 
  Button,
 
} from "reactstrap";
import { useState } from "react";

export default function DemoNavbar() {
  const [collapseClasses, setCollapseClasses] = useState("");
  const [hover, setHover] = useState(false);

  const onExiting = () => {
    setCollapseClasses("collapsing-out");
  };

  const onExited = () => {
    setCollapseClasses("");
  };
  const toggleHover = () => {
    setHover(true);
  };

  return (
    <Navbar
      className="navbar-main navbar-expand-lg navbar-dark  "
      expand="lg"
      id="navbar-main"
      style={{ backgroundColor: "rgb(24,49,109)" }}
    >
      <NavbarBrand className="" to="/" tag={Link}>
        <img src={logo} alt="logo" style={{ width: "90px", height: "60px" }} />
        <a className="navbar-brand ml-4" href="/" style={{ color: "white" }}>
          Square Academy
        </a>
      </NavbarBrand>
      <Button className="navbar-toggler" id="navbar_global">
        <span className="navbar-toggler-icon" />
      </Button>
      <UncontrolledCollapse
        toggler="#navbar_global"
        navbar
        className={collapseClasses}
        onExiting={onExiting}
        onExited={onExited}
      >
        <Nav className="d-flex navbar-nav-hover align-items-lg-center" navbar>
          <Link className="p-2 nav-link " to="/">
            <p
              style={{
                textTransform: "none",
                marginTop: "16px",
                color: "white",
              }}
            >
              Accueil
            </p>
          </Link>
          <UncontrolledDropdown
            nav
            className="d-flex p-2  align-items-baseline"
          >
            <DropdownToggle nav>
              {/* <i className="ni ni-collection d-lg-none mr-1" /> */}
              <span
                className="nav-link-inner--text"
                style={{ color: "white" }}
                onMouseMove={toggleHover}
                onMouseLeave={toggleHover}
              >
                Domaines d'études
              </span>
            </DropdownToggle>
            {hover && (
              <DropdownMenu>
                <DropdownItem to="/gestion" tag={Link}>
                  Gestion
                </DropdownItem>
                <DropdownItem to="/economie" tag={Link}>
                  Economie
                </DropdownItem>
                <DropdownItem to="/informatique" tag={Link}>
                  Informatique
                </DropdownItem>
                <DropdownItem to="/informatique" tag={Link}>
                  Informatique
                </DropdownItem>
              </DropdownMenu>
            )}
          </UncontrolledDropdown>

          <Link className="p-2 nav-link" to="/contact">
            <p
              style={{
                textTransform: "none",
                marginTop: "16px",
                color: "white",
              }}
            >
              Contact
            </p>
          </Link>
          <Link className="p-2 nav-link" to="/connexion">
            <p
              style={{
                textTransform: "none",
                marginTop: "16px",
                color: "white",
              }}
            >
              Connexion
            </p>
          </Link>

          <UncontrolledDropdown
            nav
            className="d-flex p-2  align-items-baseline"
          >
            <DropdownToggle nav>
              {/* <i className="ni ni-collection d-lg-none mr-1" /> */}
              <span
                className="nav-link-inner--text"
                style={{ color: "white" }}
                onMouseMove={toggleHover}
                onMouseLeave={toggleHover}
              >
                Super Administrateur
              </span>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem to="/listUsersInscrits" tag={Link}>
                Liste des utilisateurs inscrits
              </DropdownItem>
              <DropdownItem to="/listeFormations" tag={Link}>
                Liste des formations
              </DropdownItem>
              <DropdownItem to="/informatique" tag={Link}>
                liste des supports de cours
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </UncontrolledCollapse>
    </Navbar>
  );
}
