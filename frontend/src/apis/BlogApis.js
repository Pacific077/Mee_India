import axios from "axios";


export const CreateBlogApi = async ({title,description,BlogImage}) => {
    const response = await axios.post("/api/v1/blogs/create",
    {title,description,BlogImage},
    {
      withCredentials: true,
    });
    return response;
};

export const GetTop20BLogs = async () => {
  const response = await axios.get("/api/v1/blogs/getblogs",
  {
    withCredentials: true,
  }
  );
  return response;
};