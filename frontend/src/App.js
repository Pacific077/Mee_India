import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Shownavbar from "./components/ShowNavbar/Shownavbar";
import BusinessRegister from "./pages/BusinessRegister/BusinessRegister";
import BussinessList from "./pages/BussinessList/BussinessList";
import BussinessPage from "./pages/BussinessPage/BussinessPage";
import BusinessDasboard from "./pages/BusinessDasboard/BusinessDasboard";
import BusinessDashboardSpecific from "./pages/BusinessDashboardSpecific/BusinessDashboardSpecific";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import Apitext from "./pages/apiTest/Apitext";
import BussinessSubList from "./pages/BussinessSubList/BussinessSubList";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import BusinessDetailsEdit from "./pages/BusinessDetailsEdit/BusinessDetailsEdit";
import Admin from "./pages/Admin/Admin";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Shownavbar>
          <Navbar />
        </Shownavbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bussiness-register" element={<BusinessRegister />} />
          <Route
            path="/bussiness-list/:district/:mainCategory/:subCat"
            element={<BussinessList />}
          />
          <Route
            path="/bussiness-list/:district/:mainCategory/:subCat/:bussinessId"
            element={<BussinessPage />}
          />

          <Route
            path="/business-dashboard/:BusinessId"
            element={<BusinessDashboardSpecific />}
          />
          <Route
            path="/business-dashboard/:BusinessId/:edit"
            element={<BusinessDetailsEdit />}
          />

          <Route
            path="/userdashboard"
            element={
              <PrivateRoute>
                <UserDashboard />
              </PrivateRoute>
            }
          />

          <Route path="/subList/:Category" element={<BussinessSubList />} />
          <Route path="/admin/dashboard" element={<Admin />} />
          <Route path="/apitest" element={<Apitext />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
