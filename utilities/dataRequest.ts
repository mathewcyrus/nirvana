import axios from "axios";

const MAIN_URL: string = "http://localhost:3000/api/";
export const dataRequest = axios.create({
  baseURL: MAIN_URL,
});
