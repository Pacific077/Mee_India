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

export const ProfileApi = async () => {
    const response = await axios.get(
      "/api/v1/user/getMyProfile",
      {
        withCredentials: true,
      }
    );
    return response;
  };

  export const LogoutApi = async () => {
    const response = await axios.post(
      "/api/v1/user/logout",
      {
        withCredentials: true,
      }
    );
    return response;
  };

  export const EditProfileApi = async (data) => {
    console.log("sdfd",data)
    const response = await axios.post(
      "/api/v1/user/editProfile",
      {data},
      {
        withCredentials: true,
      }
    );
    return response;
  };

  export const SendQueryToAdmin = async ({question,UserId}) => {
    const response = await axios.post(
      "/api/v1/user/sendqueryAdmin",
      {
        question,
        UserId
      },
      {
        withCredentials: true,
      }
    );

    return response;
 
  };
