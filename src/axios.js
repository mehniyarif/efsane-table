// axios
import axios from "axios";
const baseURL =
  process.env.VUE_APP_API_URL !== undefined
    ? process.env.VUE_APP_API_URL
    : "http://api.football-data.org/v2/";

const accessToken = localStorage.getItem("accessToken");
let axiosInstance = axios.create({
  baseURL: baseURL
  // You can add your headers here
});



export const setAuthHeader = token => {
  if (token)
    axiosInstance.defaults.headers.common["X-Auth-Token"] = `1e7ff1f559f4406a983875fd5b092865`;
};

// Set the initial header from storage or something (should surround with try catch in actual app)
setAuthHeader(accessToken);

export default axiosInstance;
