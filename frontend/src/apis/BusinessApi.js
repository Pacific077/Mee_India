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
};