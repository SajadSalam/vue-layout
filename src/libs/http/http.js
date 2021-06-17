import Vue from "vue";
import axios from "axios";
// import useJwt from "../auth/jwt/useJwt";
// import { isUserLoggedIn } from "../auth/utils";

// Add default headers to axios
var headers = {
  "Content-Type": "application/json;charset=utf-8",
  "Access-Control-Allow-Origin": "*",
};

// If logged in Add Authorization headder
// if (isUserLoggedIn()) {
//   headers["Authorization"] =
//     localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName) !== null
//       ? `Bearer ${localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName)}`
//       : "";
// }
const axiosIns = axios.create({
  baseURL: "https://test.com/api",
  headers: headers,
});
Vue.prototype.$http = axiosIns;
export default axiosIns;
