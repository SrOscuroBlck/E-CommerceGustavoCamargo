import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import PcStoreLogo from "../../../assets/PcStoreLogo.svg";
import cartWidget from "../../../assets/cart.svg";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

export const MainNav = () => {
  const { totalItems } = useContext(CartContext);
  // I use Link from react-router-dom to navigate between pages
  return (
    <Navbar id="mainNav" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={PcStoreLogo} alt="PcStoreLogo" className="logo" />
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
