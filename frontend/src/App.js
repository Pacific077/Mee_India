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
import Privacy from "./pages/FooterPages/Privacy/Privacy"
import QuickLinks from "./pages/FooterPages/QuickLinks/QuickLinks"
// import ReportBug from "./pages/FooterPages/ReportBug/ReportBug"
import ListBusinessByAdmin from "./pages/ListBusinessByAdmin.js/ListBusinessByAdmin";


// import AboutUs from "./pages/FooterPages/AboutUs/AboutUs"   
// import QuickLinks from "./pages/FooterPages/QuickLinks/QuickLinks"
// import ReportBug from "./pages/FooterPages/ReportBug/ReportBug"
import WeAreHiring from "./pages/FooterPages/WeAreHiring/WeAreHiring";
import WhatsNew from "./pages/FooterPages/WhatsNew/WhatsNew";
import AllPaymentsList from "./pages/AllPaymentsList/AllPaymentsList";
import AdminPaymentListSpecific from "./pages/AdminPaymentListSpecific/AdminPaymentListSpecific";

import CustomerCare from "./pages/FooterPages/CustomerCare/CustomerCare";
import TermsAndServices from "./pages/FooterPages/TermsAndServices/TermsAndServices";

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
          <Route path="/login" element={<Login />} />
     
          <Route path="/" element={<Home />} />
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
          <Route path="/admin/listBusinessByAdmin" element={<ListBusinessByAdmin/>} />
          <Route path="/admin/queries" element={<AdminQueriesList/>} />
          <Route
            path="/admin/queries/specific/:queryId"
            element={<AdminQuerySpecific />}
          />
          
          <Route path="/admin/ShowAllPayments" element={<AllPaymentsList />} />
          <Route
            path="/admin/ShowAllPayments/specific/:paymentId"
            element={<AdminPaymentListSpecific />}
          />

          
          <Route path="/checkout/:type" element={<Checkout />} />
          <Route path="/payment/success/:type/:refId" element={<PaymentSuccess/>} />
          


          {/* uncomment and use only when testing an Api (not for general purpouse)*/}
          {/* <Route path="/apitest" element={<Apitext />} /> */}

          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/customer-care" element={<CustomerCare/>} />
          <Route path="/reportbug" element={<ReportBug/>} />
          <Route path="/we-are-hiring" element={<WeAreHiring/>} />
          <Route path="/whats-new" element={<WhatsNew/>} />
          <Route path="/privacy-policies" element={<Privacy/>}/>
          <Route path="/terms-and-services" element={<TermsAndServices/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
