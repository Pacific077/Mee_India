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
<<<<<<< HEAD
import AboutUs from "./pages/FooterPages/AboutUs/AboutUs";
import QuickLinks from "./pages/FooterPages/QuickLinks/QuickLinks";
import ReportBug from "./pages/FooterPages/ReportBug/ReportBug";
=======
import UserList from "./pages/UsersList/UserList";

import UserListSpecific from "./pages/UserListSpecific/UserListSpecific";
import AllShopList from "./pages/AllShopList/AllShopList";
import ShopListSpecific from "./pages/ShopListSpecific/ShopListSpecific";
import PricingDeteails from "./pages/PricingDetails/PricingDeteails";
import AdminEditUser from "./pages/AdminEditUser/AdminEditUser";
import AdminEditShop from "./pages/AdminEditShop/AdminEditShop";
>>>>>>> 55211399dfba68f8433b758241cc3038918dcc36

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
          <Route path="/pricing-details" element={<PricingDeteails />} />
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
          <Route path="/admin/showUserslist" element={<UserList />} />
          <Route path="/admin/showShopslist" element={<AllShopList />} />
          <Route
            path="/admin/userList/specific/:userId"
            element={<UserListSpecific />}
          />
          <Route
            path="/admin/userList/specific/edit/:userId"
            element={<AdminEditUser />}
          />
          <Route
            path="/admin/shoplist/specific/:shopId"
            element={<ShopListSpecific />}
          />
          <Route
            path="/admin/shoplist/specific/edit/:shopId"
            element={<AdminEditShop />}
          />
          <Route path="/apitest" element={<Apitext />} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/quicklinks" element={<QuickLinks/>} />
          <Route path="/reportbug" element={<ReportBug/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
