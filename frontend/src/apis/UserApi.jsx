import axios from 'axios'

export const RegisterApi = async ({name,email,password}) => {
  const response = await axios.post(
    "/api/v1/user/register",
    {
      name,
      email,password
    },
    {
      withCredentials: true,
    }
  );
  return response;
};


export const LoginApi = async ({email,password}) => {

    
    const response = await axios.post(
      "/api/v1/user/login",
      {
        email,
         password
      },
      {
        withCredentials: true,
      }
    );

    return response;
 
  };