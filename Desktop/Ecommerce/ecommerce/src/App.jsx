/**
  @SrOscuroBlck
  Coded by Gustavo Camargo - Junior Developer
  @Credits Thx to teacher Fede from CoderHouse
*/

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { NavBarContainer } from "./Components/NavBarContainer/NavBarContainer";
import { CartContainer } from "./Components/CartContainer/CartContainer";
import { CartContextProvider } from "./Context/CartContext";
import "./App.css";

/**
 * @function App
 * @returns {JSX.Element} App components.
    * El CartContextProvider es el que provee todos los elementos del carrito de compras a la App.
    * El BrowserRouter es el que provee la navegación entre las páginas.
    * El NavBarContainer es el que provee la barra de navegación.
    * El Routes es el que provee las rutas de navegación.
    * El Route es el que provee la ruta de navegación.
 */

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBarContainer />
        <Routes>
          <Route 
            path="/"
            element={<ItemListContainer />} 
          />
          <Route 
            path="/:categoryId" 
            element={<ItemListContainer />} 
          />
          <Route 
            path="/:categoryId/:brandId" 
            element={<ItemListContainer />} 
          />
          <Route
            path="/:categoryId/:brandId/:itemId"
            element={<ItemDetailContainer />}
          />
          <Route 
            path="/cart" 
            element={<CartContainer />} 
          />
          <Route 
            path="*" 
            element={<Navigate to="/" />} 
          />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
