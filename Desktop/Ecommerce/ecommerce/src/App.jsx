/*
  Coded by Gustavo Camargo
  @SrOscuroBlck
  Thx to teacher Fede from CoderHouse
*/

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { NavBarContainer } from "./Components/NavBarContainer/NavBarContainer";
import { CartContainer } from "./Components/CartContainer/CartContainer";
import { CartContextProvider } from "./Context/CartContext";
import "./App.css";

function App() {
  //App navigation is handled by react-router-dom
  return (
    <CartContextProvider>
      {/* thats why we need to wrap the whole app in a BrowserRouter and use Routes and Route components */}
      <BrowserRouter>
        {/* NavBar is rendered in all pages thats why is not inside of routes */}
        <NavBarContainer />
        <Routes>
          {/* Routes are rendered depending on the path */}
          <Route 
            path="/" 
            element={<ItemListContainer />} />
          <Route 
            path="/:categoryId" 
            element={<ItemListContainer />} />
          <Route 
            path="/:categoryId/:brandId" 
            element={<ItemListContainer />} />
          <Route
            path="/:categoryId/:brandId/:itemId"
            element={<ItemDetailContainer />}
          />
          <Route 
            path="/cart" 
            element={<CartContainer />} />
          <Route 
            path="*" 
            element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
