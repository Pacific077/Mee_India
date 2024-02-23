import React from 'react'
import  "./App.css"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'
import Shownavbar from './components/ShowNavbar/Shownavbar'
import BusinessRegister from './pages/BusinessRegister/BusinessRegister'
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
      <Route path='/bussiness-register' element={<BusinessRegister/>} />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App