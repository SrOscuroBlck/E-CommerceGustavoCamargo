/**
  *Coded by Gustavo Camargo
  *@SrOscuroBlck
  *Thx to teacher Fede from CoderHouse
*/

import { Categories } from "./Categories/Categories";
import { MainNav } from "./MainNav/MainNav";
import "./NavBarContainer.css";

/**
 * @returns {JSX.Element} NavBarContainer components.
 * @description NavBarContainer es el contenedor que tiene a MainNav y Categories.
**/

export const NavBarContainer = () => {
  return (
    <>
      <MainNav />
      <Categories />
    </>
  );
};
