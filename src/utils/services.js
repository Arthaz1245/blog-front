import axios from "axios";
export const baseUrl = "http://localhost:5000";

export const postRequest = async (url, body) => {
  try {
    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
