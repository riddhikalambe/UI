import axios, * as others from "axios";
import { MAIN_URL } from "./config";

export const deleteTeamMember = async (data) => {
  try {
    let res = await axios.post(`${MAIN_URL}/deleteTeamMember`, { data: data });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteIcons = async (data) => {
  try {
    let res = await axios.post(`${MAIN_URL}/deleteIcons`, { data: data });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteDescription = async (data) => {
  try {
    let res = await axios.post(`${MAIN_URL}/deleteDescription`, { data: data });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteLogo = async (data) => {
  try {
    let res = await axios.post(`${MAIN_URL}/deleteLogo`, { data: data });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

