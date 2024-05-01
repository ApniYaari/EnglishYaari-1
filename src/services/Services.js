import axios from "axios";



const BASE_URL="https://api.codingyaari.com/English-Yaariapi"

// export const BASE_URL="https://production.codingyaari.com/EnglishYaariServerapi"



const getAxiosHeader = (token) => {
    return {
      headers: {
        "Content-Type": "application/json",
      },
    };
  };

  


  export const allTeacherServices = async (payload) => {
    let url = `${BASE_URL}/demo-website/demo-website-teacher-list`;
    return await axios.get(url,payload,getAxiosHeader());
  };    

  


   