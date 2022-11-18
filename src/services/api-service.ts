import axios from "axios";
axios.defaults.baseURL = "https://api.json-generator.com/";
axios.defaults.headers.common.Authorization = `Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`;

export const fetchVacancies = async (page: number) => {
  const response = await axios.get(`templates/ZM1r0eic3XEy/data`);
  console.log(response);
  return response.data;
};
