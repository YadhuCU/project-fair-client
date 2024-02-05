import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverURL";

// register user
export const registerAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVER_URL}/register`, reqBody, "");
};

// register user
export const loginAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVER_URL}/login`, reqBody, "");
};

// addProject
export const addProjectAPI = async (reqBody, reqHeader) => {
  return await commonAPI(
    "POST",
    `${SERVER_URL}/add-project`,
    reqBody,
    reqHeader,
  );
};

// get home project
export const getHomeProjectAPI = async () => {
  return await commonAPI("GET", `${SERVER_URL}/home-projects`, "", "");
};

// get all project
export const getAllProjectAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_URL}/all-projects`, "", reqHeader);
};

// get user project
export const getUserProjectAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_URL}/usre-projects`, "", reqHeader);
};
