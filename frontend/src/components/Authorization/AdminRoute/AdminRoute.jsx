import React from 'react'


import { Navigate } from 'react-router-dom';

const AdminRoute = ({Component}) => {
    const isAdmin = localStorage.getItem("role")
    console.log("localstoreag",isAdmin)

  return (
    <>
    {isAdmin==="Admin"?<Component />:<Navigate to="/login" />}
</>
  )
}

export default AdminRoute