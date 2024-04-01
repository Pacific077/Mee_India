import React from "react";

import { Navigate, useParams } from "react-router-dom";

const MemberShipRoute = ({ children }) => {
  const { edit } = useParams();
  let isAllowed = false;
  const membership = localStorage.getItem("membership");
  if (membership === "Free List") {
    if (
      edit === "enquiry" ||
      edit === "editName" ||
      edit === "editPhoto" ||
      edit === "Reviews" ||
      edit === "Services"
    ) {
      isAllowed = true;
    }
  } else if (membership === "Shop List") {
    if (
      edit === "enquiry" ||
      edit === "editName" ||
      edit === "editPhoto" ||
      edit === "Reviews" ||
      edit === "Services"
    ) {
      isAllowed = true;
    }
  } else if (membership === "Standard") {
    if (
      edit === "enquiry" ||
      edit === "editName" ||
      edit === "editPhoto" ||
      edit === "Reviews" ||
      edit === "Services" ||
      edit === "Catalouge" ||
      edit === "website"
    ) {
      isAllowed = true;
    }
  } else if (membership === "Premium") {
    if (
      edit === "enquiry" ||
      edit === "editName" ||
      edit === "editPhoto" ||
      edit === "Reviews" ||
      edit === "Services" ||
      edit === "Catalouge" ||
      edit === "website"
    ) {
      isAllowed = true;
    }
  } else if (membership === "Pro") {
    if (
      edit === "enquiry" ||
      edit === "editName" ||
      edit === "editPhoto" ||
      edit === "Reviews" ||
      edit === "Services" ||
      edit === "Catalouge" ||
      edit === "website" ||
      edit === "addKeywords"
    ) {
      isAllowed = true;
    }
  }
  return isAllowed ? (
    <>{children}</>
  ) : (
    // Redirect to login page if membership is not "Pro"
    <Navigate to="/pricing-details" />
  );
};

export default MemberShipRoute;
