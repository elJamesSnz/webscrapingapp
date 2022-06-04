import { BASE_PATH } from "../utils/constants";
import axios from "axios";
import { getURL } from "next/dist/shared/lib/utils";
import { result } from "lodash";

export async function getNewsApi() {
  try {
    const url = `${BASE_PATH}/api/news/getNews`;
    const response = await axios.get(url);
    const data = response.data;
    const result = data;
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getGameByUrlApi(post) {
  try {
    let data = await getNewsApi();
    //const result = data.find((el) => el.post == post);
    //data.push(result);
    const result = data.find((el) => el.post == post);
    //return JSON.stringify(result);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }

  return data;
}
