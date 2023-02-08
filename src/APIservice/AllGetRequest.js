import axios, * as others from "axios";
import { MAIN_URL } from "./config";

export const getAllTeamMember = async (params) => {
  try {
    let res = await axios.get(`${MAIN_URL}/getAllTeamMember`, { params: params });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllIcons = async (params) => {
  try {
    let res = await axios.get(`${MAIN_URL}/getAllIcons`, { params: params });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllDescription = async (params) => {
  try {
    let res = await axios.get(`${MAIN_URL}/getAllDescription`, { params: params });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllLogo = async (params) => {
  try {
    let res = await axios.get(`${MAIN_URL}/getAllLogo`, { params: params });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPageHeading = async (params) => {
  try {
    let res = await axios.get(`${MAIN_URL}/getPageHeading`, { params: params });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};