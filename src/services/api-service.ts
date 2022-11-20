import axios from "axios";
axios.defaults.baseURL = "https://test-task-allab-backend.herokuapp.com/api/";
// axios.defaults.headers.common.Authorization = `Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`;

const getToken = async () => {
  const { data } = await axios.post("/token/");
  axios.defaults.headers.common.Authorization = `Bearer ${data.access}`;
};
getToken();

export const fetchVacancies = async (page: number) => {
  const response = await axios.get(`/jobs/?page=${page}`);
  return { data: response.data.results, totalItems: response.data.count };
};

export const fetchJob = async (id: number | undefined) => {
  if (!id) {
    return Promise.reject();
  }
  const responce = await axios.get(`job/${id}/`);
  return { data: responce.data, totalItems: 0 };
};

export const saveVacancy = async (job: number) => {
  await axios.post("/add/favorite/", { job });
};

export const unsaveVacancy = async (job: number) => {
  await axios.delete(`/favorite/${job}/`);
};
