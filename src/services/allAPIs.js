import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverURL";

// register user
export const registerAPI = async (user) => {
  return await commonAPI("POST", `${SERVER_URL}/register`, user, "");
};

// register user
export const loginAPI = async (user) => {
  return await commonAPI("POST", `${SERVER_URL}/login`, user, "");
};
