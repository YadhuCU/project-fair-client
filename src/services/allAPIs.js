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
export const getAllProjectAPI = async (searchKey, reqHeader) => {
  return await commonAPI(
    "GET",
    `${SERVER_URL}/all-projects?search=${searchKey}`,
    "",
    reqHeader,
  );
};

// get user project
export const getUserProjectAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVER_URL}/user-projects`, "", reqHeader);
};

// edit project
export const editProjectAPI = async (id, reqBody, reqHeader) => {
  return await commonAPI(
    "PUT",
    `${SERVER_URL}/project/edit/${id}`,
    reqBody,
    reqHeader,
  );
};

// delete project
export const deleteProjectAPI = async (id, reqHeader) => {
  return await commonAPI(
    "DELETE",
    `${SERVER_URL}/project/delete/${id}`,
    {},
    reqHeader,
  );
};
