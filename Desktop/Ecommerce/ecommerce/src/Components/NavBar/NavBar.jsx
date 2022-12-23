import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import PcStoreLogo from "../../assets/PcStoreLogo.svg";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import "./NavBar.css";

import CartWidget from "../CarWidget/CartWidget";


function NavBar(props) {

  const {updatePageName} = props; //Sirve para actualizar el nombre de la pagina, lo puedes ver en WorkInProgress.jsx
    
  return (
    <>
      <Navbar bg="dark" expand="lg" className="Nav">
        <Container>
          <Navbar.Brand href="#home">
            <img src={PcStoreLogo} alt="PcStoreLogo" className="logo" onClick={() => {updatePageName('Home')}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="MotherBoards"
                id="basic-nav-dropdown"
                className="dropdowns"
              >
                <NavDropdown.Item href="#action/3.1" className="dropdownItem" onClick={() => {updatePageName('Motherboard')}}>
                  All Brands
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2" className="dropdownItem" onClick={() => {updatePageName('Motherboard')}}>
                  ROG
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="dropdownItem" onClick={() => {updatePageName('Motherboard')}}>
                  Asrock
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="dropdownItem" onClick={() => {updatePageName('Motherboard')}}>
                  Aorus
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5" className="dropdownItem" onClick={() => {updatePageName('Motherboard')}}>
                  MSI
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6" className="dropdownItem" onClick={() => {updatePageName('Motherboard')}}>
                  Gigabyte
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7" className="dropdownItem" onClick={() => {updatePageName('Motherboard')}}>
                  Asus
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Processors"
                id="basic-nav-dropdown"
                className="dropdowns"
              >
                <NavDropdown.Item href="#action/3.1" className="dropdownItem" onClick={() => {updatePageName('Processors')}}>
                  All Brands
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2" className="dropdownItem" onClick={() => {updatePageName('Processors')}}>
                  Intel
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="dropdownItem" onClick={() => {updatePageName('Processors')}}>
                  AMD
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Graphics Cards"
                id="basic-nav-dropdown"
                className="dropdowns"
              >
                <NavDropdown.Item href="#action/3.1" className="dropdownItem" onClick={() => {updatePageName('Graphics Card')}}>
                  All Brands
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2" className="dropdownItem" onClick={() => {updatePageName('Graphics Card')}}>
                  Nvidia
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="dropdownItem" onClick={() => {updatePageName('Graphics Card')}}>
                  AMD
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Memory"
                id="basic-nav-dropdown"
                className="dropdowns"
              >
                <NavDropdown.Item href="#action/3.1" className="dropdownItem" onClick={() => {updatePageName('Memory')}}>
                  All Brands
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2" className="dropdownItem" onClick={() => {updatePageName('Memory')}}>
                  Corsair
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="dropdownItem" onClick={() => {updatePageName('Memory')}}>
                  G.Skill
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="dropdownItem" onClick={() => {updatePageName('Memory')}}>
                  HyperX
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5" className="dropdownItem" onClick={() => {updatePageName('Memory')}}>
                  Kingston
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6" className="dropdownItem" onClick={() => {updatePageName('Memory')}}>
                  Team Group
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7" className="dropdownItem" onClick={() => {updatePageName('Memory')}}>
                  Crucial
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Storage"
                id="basic-nav-dropdown"
                className="dropdowns"
              >
                <NavDropdown.Item href="#action/3.1" className="dropdownItem" onClick={() => {updatePageName('Storage')}}>
                  All Brands
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2" className="dropdownItem" onClick={() => {updatePageName('Storage')}}>
                  Seagate
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="dropdownItem" onClick={() => {updatePageName('Storage')}}>
                  Western Digital
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="dropdownItem" onClick={() => {updatePageName('Storage')}}>
                  Toshiba
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5" className="dropdownItem" onClick={() => {updatePageName('Storage')}}>
                  Samsung
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6" className="dropdownItem" onClick={() => {updatePageName('Storage')}}>
                  Kingston
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7" className="dropdownItem" onClick={() => {updatePageName('Storage')}}>
                  Crucial
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Cases"
                id="basic-nav-dropdown"
                className="dropdowns"
              >
                <NavDropdown.Item href="#action/3.1" className="dropdownItem" onClick={() => {updatePageName('Cases')}}>
                  All Brands
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2" className="dropdownItem" onClick={() => {updatePageName('Cases')}}>
                  Corsair
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="dropdownItem" onClick={() => {updatePageName('Cases')}}>
                  Cooler Master
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="dropdownItem" onClick={() => {updatePageName('Cases')}}>
                  ROG
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5" className="dropdownItem" onClick={() => {updatePageName('Cases')}}>
                  NZXT
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6" className="dropdownItem" onClick={() => {updatePageName('Cases')}}>
                  Thermaltake
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7" className="dropdownItem" onClick={() => {updatePageName('Cases')}}>
                  Lian Li
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8" className="dropdownItem" onClick={() => {updatePageName('Cases')}}>
                  Deepcool
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
           <CartWidget /> {/* Llamado del componente CartWidget */}
        </Container>
      </Navbar>

      
    </>
  );
}

export default NavBar;
