import React from 'react'
import  "./App.css"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'
import Shownavbar from './components/ShowNavbar/Shownavbar'
import BusinessRegister from './pages/BusinessRegister/BusinessRegister'
import BussinessList from './pages/BussinessList/BussinessList'
import BussinessPage from './pages/BussinessPage/BussinessPage'
import BusinessDasboard from './pages/BusinessDasboard/BusinessDasboard'
import BusinessDashboardSpecific from './pages/BusinessDashboardSpecific/BusinessDashboardSpecific'
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
      <Route path='/bussiness-list/:district/:mainCategory' element={<BussinessList/>} />
      <Route path='/bussiness-list/:district/:mainCategory/:bussinessId' element={<BussinessPage/>} />
      <Route path='/business-dashboard' element={<BusinessDasboard/>} />
      <Route path='/business-dashboard/:BusinessId' element={<BusinessDashboardSpecific/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App