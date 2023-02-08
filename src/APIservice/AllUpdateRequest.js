import axios, * as others from "axios";
import { MAIN_URL } from "./config";

export const updateTeamMember = async (data) => {
  try {
    let res = await axios.get(`${MAIN_URL}/updateTeamMember`, { data: data });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateIcons = async (data) => {
    try {
      let res = await axios.get(`${MAIN_URL}/updateIcons`, { data: data });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  
export const updateDescription = async (data) => {
    try {
      let res = await axios.get(`${MAIN_URL}/updateDescription`, { data: data });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  
export const updateLogo = async (data) => {
    try {
      let res = await axios.get(`${MAIN_URL}/updateLogo`, { data: data });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  
