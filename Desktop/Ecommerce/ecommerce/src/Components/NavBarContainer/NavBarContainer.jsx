import React from "react";

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import PcStoreLogo from "../../assets/PcStoreLogo.svg";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import "./NavBarContainer.css";

import cartWidget from "../../assets/cart.svg";
import { Categories } from "./Categories/Categories";
import { MainNav } from "./MainNav/MainNav";

function NavBar() {
  return (
    <>
      <MainNav />
      <Categories />
    </>
  );
}

export default NavBar;
