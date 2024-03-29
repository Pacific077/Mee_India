import React, { useContext} from 'react'

import UserContext from '../../context/UserInfo/UserContext';
import { Navigate, useNavigate } from 'react-router-dom';

const AdminRoute = ({Component}) => {
  const navigate = useNavigate()
    const usercon = useContext(UserContext);
    const {isAdmin} = usercon;

  return (
    <>
    {isAdmin?<Component />:<Navigate to="/login" />}
</>
  )
}

export default AdminRoute