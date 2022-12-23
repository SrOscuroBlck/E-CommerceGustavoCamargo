import { useState } from "react";
import './App.css'
import Navbar from './Components/NavBar/NavBar'
import WorkInProgress from './Components/WorkInProgress/WorkInProgress'

function App() {
  //Este useState es el hook que se encarga de actualizar el nombre de la pagina, o eso entendí jajjajjajajajja
  const [pageName, setPageName] = useState('Home') 
  //Esta funcion ayuda a actualizar el nombre de la pagina
  const updatePageName = (newPageName) => {
    setPageName(newPageName)
  }

  return (
    <>
      <Navbar updatePageName = {updatePageName} />
      <WorkInProgress currentPageName = {pageName} />
    </>
  )
}



export default App
