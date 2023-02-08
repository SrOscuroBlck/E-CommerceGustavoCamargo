/*
  Coded by Gustavo Camargo
  @SrOscuroBlck
  Thx to teacher Fede from CoderHouse
*/

import "bootstrap/dist/css/bootstrap.min.css";
import { Categories } from "./Categories/Categories";
import { MainNav } from "./MainNav/MainNav";
import "./NavBarContainer.css";

export const NavBarContainer = () => {
  // NavBarContainer is composed of MainNav and Categories
  return (
    <>
      {/* MainNav consists in the logo and cart */}
      <MainNav />
      {/* Categories consists in all the brands and types of components it works like a filter */}
      <Categories />
    </>
  );
};
