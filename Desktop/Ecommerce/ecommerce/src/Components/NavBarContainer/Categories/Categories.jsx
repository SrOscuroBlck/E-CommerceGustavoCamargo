import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

/**
 * @returns {JSX.Element} Categories
 * @description El componente Categories se compone de un Navbar de react-bootstrap
 * tambien utiliza Link de react-router-dom para navegar entre paginas, funciona como filtro.
 */

export const Categories = () => {
  return (
    <Navbar bg="dark" sticky="top" expand="lg" id="categories-nav">
      <Container>
        <Navbar.Toggle
          className="mx-auto my-2"
          aria-controls="categories-navbar-nav"
        />
        <Navbar.Collapse id="categories-navbar-nav">
          <Nav className="me-auto mx-auto">
            <NavDropdown
              title="MotherBoards"
              id="categories-nav-dropdown"
              className="dropdowns mx-auto px-4 text-center"
            >
              <Link to="/Motherboard">
                <div>
                  <NavDropdown.Item
                    href="#action/3.1"
                    className="CategoriesDropdownItem"
                  >
                    All Brands
                  </NavDropdown.Item>
                </div>
              </Link>
              <NavDropdown.Divider />
              <Link to="/Motherboard/ROG">
                <div>
                  <NavDropdown.Item
                    href="#action/3.2"
                    className="CategoriesDropdownItem"
                  >
                    ROG
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/Motherboard/Asrock">
                <div>
                  <NavDropdown.Item
                    href="#action/3.3"
                    className="CategoriesDropdownItem"
                  >
                    Asrock
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/Motherboard/Aorus">
                <div>
                  <NavDropdown.Item
                    href="#action/3.4"
                    className="CategoriesDropdownItem"
                  >
                    Aorus
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/Motherboard/MSI">
                <div>
                  <NavDropdown.Item
                    href="#action/3.5"
                    className="CategoriesDropdownItem"
                  >
                    MSI
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/Motherboard/Gigabyte">
                <div>
                  <NavDropdown.Item
                    href="#action/3.6"
                    className="CategoriesDropdownItem"
                  >
                    Gigabyte
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/Motherboard/Asus">
                <div>
                  <NavDropdown.Item
                    href="#action/3.7"
                    className="CategoriesDropdownItem"
                  >
                    Asus
                  </NavDropdown.Item>
                </div>
              </Link>
            </NavDropdown>
            <NavDropdown
              title="Processors"
              id="categories-nav-dropdown"
              className="dropdowns mx-auto px-4 text-center"
            >
              <Link to="/Processor">
                <div>
                  <NavDropdown.Item
                    href="#action/3.1"
                    className="CategoriesDropdownItem"
                  >
                    All Brands
                  </NavDropdown.Item>
                </div>
              </Link>
              <NavDropdown.Divider />
              <Link to="/Processor/Intel">
                <div>
                  <NavDropdown.Item
                    href="#action/3.2"
                    className="CategoriesDropdownItem"
                  >
                    Intel
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/Processor/AMD">
                <div>
                  <NavDropdown.Item
                    href="#action/3.3"
                    className="CategoriesDropdownItem"
                  >
                    AMD
                  </NavDropdown.Item>
                </div>
              </Link>
            </NavDropdown>
            <NavDropdown
              title="Graphics Cards"
              id="categories-nav-dropdown"
              className="dropdowns mx-auto px-4 text-center"
            >
              <Link to="/GraphicsCard">
                <div>
                  <NavDropdown.Item
                    href="#action/3.1"
                    className="CategoriesDropdownItem"
                  >
                    All Brands
                  </NavDropdown.Item>
                </div>
              </Link>
              <NavDropdown.Divider />
              <Link to="/GraphicsCard/Nvidia">
                <div>
                  <NavDropdown.Item
                    href="#action/3.2"
                    className="CategoriesDropdownItem"
                  >
                    Nvidia
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/GraphicsCard/AMD">
                <div>
                  <NavDropdown.Item
                    href="#action/3.3"
                    className="CategoriesDropdownItem"
                  >
                    AMD
                  </NavDropdown.Item>
                </div>
              </Link>
            </NavDropdown>
            <NavDropdown
              title="RAM"
              id="categories-nav-dropdown"
              className="dropdowns mx-auto px-4 text-center"
            >
              <Link to="/RAM">
                <div>
                  <NavDropdown.Item
                    href="#action/3.1"
                    className="CategoriesDropdownItem"
                  >
                    All Brands
                  </NavDropdown.Item>
                </div>
              </Link>
              <NavDropdown.Divider />
              <Link to="/RAM/Corsair">
                <div>
                  <NavDropdown.Item
                    href="#action/3.2"
                    className="CategoriesDropdownItem"
                  >
                    Corsair
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/RAM/G.Skill">
                <div>
                  <NavDropdown.Item
                    href="#action/3.3"
                    className="CategoriesDropdownItem"
                  >
                    G.Skill
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/RAM/HyperX">
                <div>
                  <NavDropdown.Item
                    href="#action/3.4"
                    className="CategoriesDropdownItem"
                  >
                    HyperX
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/RAM/Kingston">
                <div>
                  <NavDropdown.Item
                    href="#action/3.5"
                    className="CategoriesDropdownItem"
                  >
                    Kingston
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/RAM/Thermaltake">
                <div>
                  <NavDropdown.Item
                    href="#action/3.6"
                    className="CategoriesDropdownItem"
                  >
                    Thermaltake
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/RAM/Crucial">
                <div>
                  <NavDropdown.Item
                    href="#action/3.7"
                    className="CategoriesDropdownItem"
                  >
                    Crucial
                  </NavDropdown.Item>
                </div>
              </Link>
            </NavDropdown>
            <NavDropdown
              title="Storage"
              id="categories-nav-dropdown"
              className="dropdowns mx-auto px-4 text-center"
            >
              <Link to="/Storage">
                <div>
                  <NavDropdown.Item
                    href="#action/3.1"
                    className="CategoriesDropdownItem"
                  >
                    All Brands
                  </NavDropdown.Item>
                </div>
              </Link>
              <NavDropdown.Divider />
              <Link to="/Storage/Seagate">
                <div>
                  <NavDropdown.Item
                    href="#action/3.2"
                    className="CategoriesDropdownItem"
                  >
                    Seagate
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/Storage/WD">
                <div>
                  <NavDropdown.Item
                    href="#action/3.3"
                    className="CategoriesDropdownItem"
                  >
                    Western Digital
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/Storage/Corsair">
                <div>
                  <NavDropdown.Item
                    href="#action/3.4"
                    className="CategoriesDropdownItem"
                  >
                    Corsair
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/Storage/Samsung">
                <div>
                  <NavDropdown.Item
                    href="#action/3.5"
                    className="CategoriesDropdownItem"
                  >
                    Samsung
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/Storage/Kingston">
                <div>
                  <NavDropdown.Item
                    href="#action/3.6"
                    className="CategoriesDropdownItem"
                  >
                    Kingston
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/Storage/Crucial">
                <div>
                  <NavDropdown.Item
                    href="#action/3.7"
                    className="CategoriesDropdownItem"
                  >
                    Crucial
                  </NavDropdown.Item>
                </div>
              </Link>
            </NavDropdown>
            <NavDropdown
              title="Cases"
              id="categories-nav-dropdown"
              className="dropdowns mx-auto px-4 text-center"
            >
              <Link to="/Case">
                <div>
                  <NavDropdown.Item
                    href="#action/3.1"
                    className="CategoriesDropdownItem"
                  >
                    All Brands
                  </NavDropdown.Item>
                </div>
              </Link>
              <NavDropdown.Divider />
              <Link to="/Case/Corsair">
                <div>
                  <NavDropdown.Item
                    href="#action/3.2"
                    className="CategoriesDropdownItem"
                  >
                    Corsair
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/Case/CoolerMaster">
                <div>
                  <NavDropdown.Item
                    href="#action/3.3"
                    className="CategoriesDropdownItem"
                  >
                    Cooler Master
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/Case/ROG">
                <div>
                  <NavDropdown.Item
                    href="#action/3.4"
                    className="CategoriesDropdownItem"
                  >
                    ROG
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/Case/NZXT">
                <div>
                  <NavDropdown.Item
                    href="#action/3.5"
                    className="CategoriesDropdownItem"
                  >
                    NZXT
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/Case/Thermaltake">
                <div>
                  <NavDropdown.Item
                    href="#action/3.6"
                    className="CategoriesDropdownItem"
                  >
                    Thermaltake
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/Case/LianLi">
                <div>
                  <NavDropdown.Item
                    href="#action/3.7"
                    className="CategoriesDropdownItem"
                  >
                    Lian Li
                  </NavDropdown.Item>
                </div>
              </Link>
              <Link to="/Case/Deepcool">
                <div>
                  <NavDropdown.Item
                    href="#action/3.8"
                    className="CategoriesDropdownItem"
                  >
                    Deepcool
                  </NavDropdown.Item>
                </div>
              </Link>
            </NavDropdown>
            <NavDropdown title="PSU" id="categories-nav-dropdown" className="dropdowns mx-auto px-4 text-center">
              <Link to="/PowerSupply">
                <div>
                  <NavDropdown.Item href="#action/3.1" className="CategoriesDropdownItem">
                    All Brands
                  </NavDropdown.Item>
                </div>
              </Link>
              <NavDropdown.Divider />
              <Link to="/PowerSupply/Corsair">
                <div>
                  <NavDropdown.Item href="#action/3.2" className="CategoriesDropdownItem">
                    Corsair
                  </NavDropdown.Item>
                </div>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
