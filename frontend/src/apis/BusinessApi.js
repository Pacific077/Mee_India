import axios from "axios";

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
