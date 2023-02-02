import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'
import PcStoreLogo from '../../../assets/PcStoreLogo.svg'
import cartWidget from '../../../assets/cart.svg'

export const MainNav = () => {
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
              <img src={cartWidget} alt="CartWidget" />
            </Link>
          </div>
        </Container>
    </Navbar>
  )
}
