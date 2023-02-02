import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export const Categories = () => {
  return (
    <Navbar bg="dark" sticky="top" expand="lg" id="itemsNav">
        <Container>
          <Navbar.Toggle
            className="mx-auto my-2"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-auto">
              <NavDropdown
                title="MotherBoards"
                id="basic-nav-dropdown"
                className="dropdowns mx-auto px-4 text-center"
              >
                <Link to="/Motherboard">
                  <NavDropdown.Item href="#action/3.1" className="dropdownItem">
                    All Brands
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link to="/Motherboard/ROG">
                  <NavDropdown.Item href="#action/3.2" className="dropdownItem">
                    ROG
                  </NavDropdown.Item>
                </Link>
                <Link to="/Motherboard/Asrock">
                  <NavDropdown.Item href="#action/3.3" className="dropdownItem">
                    Asrock
                  </NavDropdown.Item>
                </Link>
                <Link to="/Motherboard/Aorus">
                  <NavDropdown.Item href="#action/3.4" className="dropdownItem">
                    Aorus
                  </NavDropdown.Item>
                </Link>
                <Link to="/Motherboard/MSI">
                  <NavDropdown.Item href="#action/3.5" className="dropdownItem">
                    MSI
                  </NavDropdown.Item>
                </Link>
                <Link to="/Motherboard/Gigabyte">
                  <NavDropdown.Item href="#action/3.6" className="dropdownItem">
                    Gigabyte
                  </NavDropdown.Item>
                </Link>
                <Link to="/Motherboard/Asus">
                  <NavDropdown.Item href="#action/3.7" className="dropdownItem">
                    Asus
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown
                title="Processors"
                id="basic-nav-dropdown"
                className="dropdowns mx-auto px-4 text-center"
              >
                <Link to="/Processor">
                  <NavDropdown.Item href="#action/3.1" className="dropdownItem">
                    All Brands
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link to="/Processor/Intel">
                  <NavDropdown.Item href="#action/3.2" className="dropdownItem">
                    Intel
                  </NavDropdown.Item>
                </Link>
                <Link to="/Processor/AMD">
                  <NavDropdown.Item href="#action/3.3" className="dropdownItem">
                    AMD
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown
                title="Graphics Cards"
                id="basic-nav-dropdown"
                className="dropdowns mx-auto px-4 text-center"
              >
                <Link to="/GraphicsCard">
                  <NavDropdown.Item href="#action/3.1" className="dropdownItem">
                    All Brands
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link to="/GraphicsCard/Nvidia">
                  <NavDropdown.Item href="#action/3.2" className="dropdownItem">
                    Nvidia
                  </NavDropdown.Item>
                </Link>
                <Link to="/GraphicsCard/AMD">
                  <NavDropdown.Item href="#action/3.3" className="dropdownItem">
                    AMD
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown
                title="RAM"
                id="basic-nav-dropdown"
                className="dropdowns mx-auto px-4 text-center"
              >
                <Link to="/RAM">
                  <NavDropdown.Item href="#action/3.1" className="dropdownItem">
                    All Brands
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link to="/RAM/Corsair">
                  <NavDropdown.Item href="#action/3.2" className="dropdownItem">
                    Corsair
                  </NavDropdown.Item>
                </Link>
                <Link to="/RAM/G.Skill">
                  <NavDropdown.Item href="#action/3.3" className="dropdownItem">
                    G.Skill
                  </NavDropdown.Item>
                </Link>
                <Link to="/RAM/HyperX">
                  <NavDropdown.Item href="#action/3.4" className="dropdownItem">
                    HyperX
                  </NavDropdown.Item>
                </Link>
                <Link to="/RAM/Kingston">
                  <NavDropdown.Item href="#action/3.5" className="dropdownItem">
                    Kingston
                  </NavDropdown.Item>
                </Link>
                <Link to="/RAM/Thermaltake">
                  <NavDropdown.Item href="#action/3.6" className="dropdownItem">
                    Thermaltake
                  </NavDropdown.Item>
                </Link>
                <Link to="/RAM/Crucial">
                  <NavDropdown.Item href="#action/3.7" className="dropdownItem">
                    Crucial
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown
                title="Storage"
                id="basic-nav-dropdown"
                className="dropdowns mx-auto px-4 text-center"
              >
                <Link to="/Storage">
                  <NavDropdown.Item href="#action/3.1" className="dropdownItem">
                    All Brands
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link to="/Storage/Seagate">
                  <NavDropdown.Item href="#action/3.2" className="dropdownItem">
                    Seagate
                  </NavDropdown.Item>
                </Link>
                <Link to="/Storage/WD">
                  <NavDropdown.Item href="#action/3.3" className="dropdownItem">
                    Western Digital
                  </NavDropdown.Item>
                </Link>
                <Link to="/Storage/Corsair">
                  <NavDropdown.Item href="#action/3.4" className="dropdownItem">
                    Corsair
                  </NavDropdown.Item>
                </Link>
                <Link to="/Storage/Samsung">
                  <NavDropdown.Item href="#action/3.5" className="dropdownItem">
                    Samsung
                  </NavDropdown.Item>
                </Link>
                <Link to="/Storage/Kingston">
                  <NavDropdown.Item href="#action/3.6" className="dropdownItem">
                    Kingston
                  </NavDropdown.Item>
                </Link>
                <Link to="/Storage/Crucial">
                  <NavDropdown.Item href="#action/3.7" className="dropdownItem">
                    Crucial
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown
                title="Cases"
                id="basic-nav-dropdown"
                className="dropdowns mx-auto px-4 text-center"
              >
                <Link to="/Case">
                  <NavDropdown.Item href="#action/3.1" className="dropdownItem">
                    All Brands
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link to="/Case/Corsair">
                  <NavDropdown.Item href="#action/3.2" className="dropdownItem">
                    Corsair
                  </NavDropdown.Item>
                </Link>
                <Link to="/Case/CoolerMaster">
                  <NavDropdown.Item href="#action/3.3" className="dropdownItem">
                    Cooler Master
                  </NavDropdown.Item>
                </Link>
                <Link to="/Case/ROG">
                  <NavDropdown.Item href="#action/3.4" className="dropdownItem">
                    ROG
                  </NavDropdown.Item>
                </Link>
                <Link to="/Case/NZXT">
                  <NavDropdown.Item href="#action/3.5" className="dropdownItem">
                    NZXT
                  </NavDropdown.Item>
                </Link>
                <Link to="/Case/Thermaltake">
                  <NavDropdown.Item href="#action/3.6" className="dropdownItem">
                    Thermaltake
                  </NavDropdown.Item>
                </Link>
                <Link to="/Case/LianLi">
                  <NavDropdown.Item href="#action/3.7" className="dropdownItem">
                    Lian Li
                  </NavDropdown.Item>
                </Link>
                <Link to="/Case/Deepcool">
                  <NavDropdown.Item href="#action/3.8" className="dropdownItem">
                    Deepcool
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
