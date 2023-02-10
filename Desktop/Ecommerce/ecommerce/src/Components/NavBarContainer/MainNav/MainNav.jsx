import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import PcStoreLogo from "../../../assets/PcStoreLogo.svg";
import cartWidget from "../../../assets/cart.svg";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

/**
 * @returns {JSX.Element} MainNav
 * @description El MainNav se compone de un logo y un carrito de compras
 * ademas utiliza el contexto de CartContext para mostrar la cantidad de items
 * y Link de react-router-dom para navegar entre paginas
 */

export const MainNav = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <Navbar id="main-nav" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={PcStoreLogo} alt="PcStoreLogo" id="main-nav-logo" />
          </Link>
        </Navbar.Brand>
        <div className="d-flex mx-4">
          <Link to="/cart">
            <span className="badge bg-secondary">{totalItems()}</span>
            <img src={cartWidget} alt="CartWidget" />
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};
