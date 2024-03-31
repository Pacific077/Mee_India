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

export const GetBlogbyId = async ({id}) => {
  const response = await axios.get(`/api/v1/blogs/getbyid/${id}`,
  {
    withCredentials: true,
  }
  );
  return response;
};
export const DelBlogbyId = async ({id}) => {
  const response = await axios.delete(`/api/v1/blogs/deletebyid/${id}`,
  {
    withCredentials: true,
  }
  );
  return response;
};
export const AddtoFeatureBlog = async ({blogId}) => {
  const response = await axios.post("/api/v1/blogs/featureBlog",
  {blogId},
  {
    withCredentials: true,
  });
  return response;
};
export const RemoveFromFeatureBlog = async ({blogId}) => {
  const response = await axios.post("/api/v1/blogs/removfeatureBlog",
  {blogId},
  {
    withCredentials: true,
  });
  return response;
};
export const GetAllFeaturedBlogs = async () => {
  const response = await axios.get(`/api/v1/blogs/getfeatureBlog`,
  {
    withCredentials: true,
  }
  );
  return response;
};