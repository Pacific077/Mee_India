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
import UserList from "./pages/UsersList/UserList";

import UserListSpecific from "./pages/UserListSpecific/UserListSpecific";
import AllShopList from "./pages/AllShopList/AllShopList";
import ShopListSpecific from "./pages/ShopListSpecific/ShopListSpecific";
import PricingDeteails from "./pages/PricingDetails/PricingDeteails";
import AdminEditUser from "./pages/AdminEditUser/AdminEditUser";
import AdminEditShop from "./pages/AdminEditShop/AdminEditShop";
import AdminSideNav from "./pages/Admin/AdminSideNav/AdminSideNav";
import ShowAdminSideNav from "./components/ShowAdminSideNav/ShowAdminSideNav";
import CreateNewAdmin from "./pages/CreateNewAdmin/CreateNewAdmin";
import HelpAndSupport from "./components/HelpAndSupport/HelpAndSupport";
import AdminQueriesList from "./pages/AdminQueriesList/AdminQueriesList";
import AdminQuerySpecific from "./pages/AdminQuerySpecific/AdminQuerySpecific";
import AboutUs from "./pages/FooterPages/AboutUs/AboutUs";
import ReportBug from "./pages/FooterPages/ReportBug/ReportBug";
import Checkout from "./pages/CheckoutPage/Checkout";
import PaymentSuccess from "./pages/PaymentSucess/PaymentSuccess";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Shownavbar>
          <Navbar />
        </Shownavbar>
        <ShowAdminSideNav>
          <AdminSideNav />
        </ShowAdminSideNav>
        <HelpAndSupport/>
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
          <Route path="/admin/createNewAdmin" element={<CreateNewAdmin/>} />
          <Route path="/admin/queries" element={<AdminQueriesList/>} />
          <Route
            path="/admin/queries/specific/:queryId"
            element={<AdminQuerySpecific />}
          />
          <Route path="/checkout/:type" element={<Checkout />} />
          <Route path="/payment/success/:type/:refId" element={<PaymentSuccess/>} />
          <Route path="/apitest" element={<Apitext />} />
          <Route path="/aboutus" element={<AboutUs/>} />
          {/* <Route path="/quicklinks" element={<QuickLinks/>} /> */}
          <Route path="/reportbug" element={<ReportBug/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
