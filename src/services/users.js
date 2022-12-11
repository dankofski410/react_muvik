import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserReports = () => {
  return axios.get(API_URL + "user-reports", { headers: authHeader() });
};

const getUserChannels = () => {
  return axios.get(API_URL + "channels", { headers: authHeader() });
};

const getSubAdminBoard = () => {
  return axios.get(API_URL + "sub-admin", { headers: authHeader() });
};

const getAdminDash = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const adminDistributeChannels = () => {
  return axios.get(API_URL + "distribute-channels", {
    headers: authHeader(),
  });
};

const adminGrantPermissions = () => {
  return axios.post(API_URL + "permissions", {
    headers: authHeader(),
  });
};

const adminCreateChannels = () => {
  return axios.post(API_URL + "create-channel", {
    headers: authHeader(),
  });
};

const UserService = {
  getPublicContent,
  getUserChannels,
  getUserReports,
  getSubAdminBoard,
  getAdminDash,
  adminDistributeChannels,
  adminGrantPermissions,
  adminCreateChannels,
};

export default UserService;
