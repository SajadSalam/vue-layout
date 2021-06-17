import Vue from "vue";
import axios from "axios";


// Add default headers to axios
var headers = {
  "Content-Type": "application/json;charset=utf-8",
  "Access-Control-Allow-Origin": "*",
};


const axiosIns = axios.create({
  baseURL: "https://test.com/api",
  headers: headers,
});
Vue.prototype.$http = axiosIns;
export default axiosIns;
