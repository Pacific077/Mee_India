import axios from "axios";

export const SearchOnClickApi = async ({
  district,
  mainCategory,
  latitude,
  longitude,
  subCat,
}) => {
  const response = await axios.post("/api/v1/bussiness/findBussiness", {
    district,
    mainCategory,
    latitude,
    longitude,
    subCat,
  });
  return response;
};

export const SearchOnTypeApi = async ({ query }) => {
  const response = await axios.post("/api/v1/bussiness/findBussinessbyText", {
    query,
  });
  return response;
};

export const findByID = async ({ bussinessId }) => {
  const response = await axios.post("/api/v1/bussiness/findByID", {
    bussinessId,
  });
  return response;
};

export const FreeListApi = async (data) => {
  console.log("start", data);
  const response = await axios.post(
    "http://localhost:5000/api/v1/bussiness/freelist",
    data,
    {
      withCredentials: true,
    }
  );
  return response;
};

export const ReviewSubmit = async (data) => {
  console.log("start", data);
  const response = await axios.put(
    "http://localhost:5000/api/v1/bussiness/reviewSubmit",
    data,
    {
      withCredentials: true,
    }
  );
  return response;
};

export const EnquirySubmit = async ({ question, bussinessId }) => {
  const response = await axios.put(
    "http://localhost:5000/api/v1/bussiness/enquirySubmit",
    { question, bussinessId },
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

export const GetBusinessEnquiries = async ({ businessId }) => {
  const response = await axios.post("/api/v1/bussiness/BusinessEnquiries", {
    businessId,
  });
  return response;
};

export const AddKeywordsApi = async ({ id, keyword }) => {
  const response = await axios.post("/api/v1/bussiness/addKeyword", {
    id,
    keyword,
  });
  return response;
};

export const getAllKeywords = async ({ id }) => {
  const response = await axios.get(`/api/v1/bussiness/getKeywords/${id}`);
  return response;
};

export const DelkeywordWithString = async ({ id, string }) => {
  // console.log("id str", id, string);
  const resp = await axios.delete("/api/v1/bussiness/delKeywords", {
    withCredentials: true,
    data: { id, string }
  });
  return resp;
};
