import axios from "axios";



// const BASE_URL="https://api.codingyaari.com/English-Yaariapi"

export const BASE_URL="https://production.codingyaari.com/EnglishYaariServerapi"


const getAxiosHeader = (token) => {
    return {
      headers: {
        "Content-Type": "application/json",
      },
    };
  };

export const teacherListServices = async (payload) => {
    // let token = await getStorageValue("token");

    let url = `${BASE_URL}/demo-website/demo-website-teacher-list`;
    return await axios.get(url,getAxiosHeader());
  };   