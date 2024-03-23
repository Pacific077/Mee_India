import axios from 'axios'

export const GetPast7daysData = async () => {
  const response = await axios.get(
    "/api/v1/admin/last-7-days",
    {
      withCredentials: true,
    }
  );
  return response;
};

