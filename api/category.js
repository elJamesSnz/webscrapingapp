import { BASE_PATH } from "../utils/constants";
import axios from "axios";

export async function getCategoriesApi() {
  try {
    const url = `${BASE_PATH}/api/news/getCat`;
    const response = await axios.get(url);
    const data = response.data;
    const result = data;
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
