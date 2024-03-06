import axios from "axios";

export const SearchOnClickApi = async ({ district, mainCategory, latitude, longitude }) => {
      const response = await axios.post(
        "/api/v1/bussiness/findBussiness",
        {
          district,
          mainCategory,
          latitude,
          longitude
        }
      );
      return response;
  };

export const findByID = async ({ bussinessId }) => {
    const response = await axios.post(
      "/api/v1/bussiness/findByID",
      {
        bussinessId
      }
    );
    return response;
}

export const FreeListApi = async (data) => {
    console.log("start",data)
  const response = await axios.post(
    "http://localhost:5000/api/v1/bussiness/freelist",
    data,
    {
      withCredentials: true,
    }
  );
  return response;
};

export const BusienessEdit = async (EditDetails) => {


  const response = await axios.post(
    "http://localhost:5000/api/v1/bussiness/EditBusiness",
    EditDetails,
    {
      withCredentials: true,
    }
  );

  return response;

};