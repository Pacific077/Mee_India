import axios from "axios";

export const GetPast7daysData = async () => {
  const response = await axios.get("/api/v1/admin/last-7-days", {
    withCredentials: true,
  });
  return response;
};
export const getcounts = async () => {
  const response = await axios.get("/api/v1/admin/getcounts", {
    withCredentials: true,
  });
  return response;
};

export const getUserList = async () => {
  const response = await axios.get("/api/v1/admin/userList", {
    withCredentials: true,
  });
  return response;
};
export const getShopsList = async () => {
  const response = await axios.get("/api/v1/admin/businessList", {
    withCredentials: true,
  });
  return response;
};

export const getUserbyId = async ({ id }) => {
  const response = await axios.post(
    "/api/v1/admin/getuserById",
    {
      id,
    },
    {
      withCredentials: true,
    }
  );
  return response;
};
export const getShopById = async ({ id }) => {
  const response = await axios.post(
    "/api/v1/admin/getShopById",
    {
      id,
    },
    {
      withCredentials: true,
    }
  );
  return response;
};
export const AdminEditUserdetails = async ({
  id,
  name,
  email,
  contact,
  Membership,
}) => {
  const response = await axios.put(
    `/api/v1/admin/updateuser/${id}`,
    {
      name,
      email,
      contact,
      Membership,
    },
    {
      withCredentials: true,
    }
  );
  return response;
};
export const AdminDeleteUser = async ({ id }) => {
  const response = await axios.delete(`/api/v1/admin/deleteUser/${id}`, {
    withCredentials: true,
  });
  return response;
};
export const AdminEditShopdetails = async ({
  id,
  title,
  bussinessMail,
  mainCategory,
  subCategory,
  state,
  district,
  pinCode,
}) => {
  const response = await axios.put(
    `/api/v1/admin/updateShop/${id}`,
    {
      title,
      bussinessMail,
      mainCategory,
      subCategory,
      state,
      district,
      pinCode,
    },
    {
      withCredentials: true,
    }
  );
  return response;
};
export const AdminDeleteShop = async ({ id }) => {
  const response = await axios.delete(`/api/v1/admin/deleteShop/${id}`, {
    withCredentials: true,
  });
  return response;
};

export const AdminFilterUser = async ({ membership, startDate }) => {
  const response = await axios.get(
    `/api/v1/admin/Usersearch/?membership=${membership}&startDate=${startDate}`,
    {
      withCredentials: true,
    }
  );
  return response;
};

export const  AdminFilterShop = async ({
  mainCategory,
  subCategory,
  state,
  district,
  owner,
}) => {
  const response = await axios.get(
    `/api/v1/admin/Shopsearch/?mainCategory=${mainCategory}&subCategory=${subCategory}&state=${state}&district=${district}&owner=${owner}`,
    {
      withCredentials: true,
    }
  );
  return response;
};


export const CreateNewAdminAccount = async ({ name,email,password }) => {
  const response = await axios.post(
    "/api/v1/admin/createNewAdmin",
    {
      name,email,password
    },
    {
      withCredentials: true,
    }
  );
  return response;
};

export const GetAllAdminqueries = async () => {
  const response = await axios.get("/api/v1/admin/getAllQueries", {
    withCredentials: true,
  });
  return response;
};

export const GetAdminQueryById= async ({id}) => {
  const response = await axios.post(
    "/api/v1/admin/getQuerieByID",
    {
      id
    },
    {
      withCredentials: true,
    }
  );
  return response;
};

export const GetAllMembershipsCount = async () => {
  const response = await axios.get("/api/v1/admin/getMembershipCount", {
    withCredentials: true,
  });
  return response;
};