import { BrowserRouter ,Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import Navbar from './Components/NavBar/NavBar'
import { CartContainer } from "./Components/CartContainer/CartContainer";

function App() {

  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/:categoryId" element={<ItemListContainer />} />
        <Route path="/:categoryId/:brandId" element={<ItemListContainer />} />
        <Route path="/:categoryId/:brandId/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}



export default App
