export const baseUrl = "http://localhost:6000";
import axios from "axios";
export const postRequest = async (url, body) => {
  try {
    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
