import axios from 'axios'

export const GetPast7daysData = async () => {
  const response = await axios.get(
    "/api/v1/admin/last-7-days",
    {
      withCredentials: true,
    }
  );
  return response;
};
export const getcounts = async () => {
  const response = await axios.get(
    "/api/v1/admin/getcounts",
    {
      withCredentials: true,
    }
  );
  return response;
};

export const getUserList = async () => {
  const response = await axios.get(
    "/api/v1/admin/userList",
    {
      withCredentials: true,
    }
  );
  return response;
};
export const getShopsList = async () => {
  const response = await axios.get(
    "/api/v1/admin/businessList",
    {
      withCredentials: true,
    }
  );
  return response;
};

export const getUserbyId = async ({id}) => {
  const response = await axios.post(
    "/api/v1/admin/getuserById",
    {
      id
    },
    {
      withCredentials: true,
    }
  );
  return response;
};
export const getShopById = async ({id}) => {
  const response = await axios.post(
    "/api/v1/admin/getShopById",
    {
      id
    },
    {
      withCredentials: true,
    } 
  );
  return response;
};
export const AdminEditUserdetails = async ({id,name,email,contact,Membership}) => {
  const response = await axios.put(
    `/api/v1/admin/updateuser/${id}`,
    {
      name,email,contact,
      Membership
    },
    {
      withCredentials: true,
    }
  );
  return response;
};
export const AdminDeleteUser = async ({id}) => {
  const response = await axios.delete(
    `/api/v1/admin/deleteUser/${id}`,
    {
      withCredentials: true,
    }
  );
  return response;
};

