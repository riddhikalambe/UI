import axios, * as others from "axios";
import { MAIN_URL } from "./config";

export const saveTeamMember = async (data) => {
  try {
    let res = await axios.get(`${MAIN_URL}/saveTeamMember`, { data: data });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveIcons = async (data) => {
  try {
    let res = await axios.get(`${MAIN_URL}/saveIcons`, { data: data });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveDescription = async (data) => {
  try {
    let res = await axios.get(`${MAIN_URL}/saveDescription`, { data: data });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveLogo = async (data) => {
  try {
    let res = await axios.get(`${MAIN_URL}/saveLogo`, { data: data });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveHeading = async (data) => {
  try {
    let res = await axios.get(`${MAIN_URL}/saveHeading`, { data: data });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};