import axios from "axios";

export const FreeListApi = async (data) => {
    console.log("start",data)
  const response = await axios.post(
    "/api/v1/bussiness/freelist",
    data,
    {
      withCredentials: true,
    }
  );
  return response;
};
