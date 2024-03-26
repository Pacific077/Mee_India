import axios from "axios";

export const PaymentCheckOutApi = async ({amount}) => {
    const response = await axios.post("/api/v1/payments/checkout",
    {amount},
    {
      withCredentials: true,
    });
    return response;
  };
  

  export const GetRazorPayKey = async ()=>{
     const resp = await axios.get('/api/v1/payments/getKey',
     {
      withCredentials:true,
     });
     return resp;
  }

  // export const PaymentVerifcation = async ()=>{
  //   const resp
  // }