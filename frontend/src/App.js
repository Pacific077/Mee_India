import React from 'react'
import  "./App.css"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'
import Shownavbar from './components/ShowNavbar/Shownavbar'
const App = () => {

  return (
    <>
    <BrowserRouter>
    <Shownavbar>
      <Navbar/>
    </Shownavbar>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App