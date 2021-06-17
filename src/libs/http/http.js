import Vue from "vue";
import axios from "axios";

// Add default headers to axios
var headers = {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
};
var isLoggedIn = false;

// If logged in Add Authorization headder
if(isLoggedIn){
    headers['Authorization'] = localStorage.getItem('accessToken') !== null ? `Bearer ${localStorage.getItem('accessToken')}` : '';
}
const axiosIns = axios.create({
  baseURL: "https://test.com/api",
  headers: headers
});
Vue.prototype.$http = axiosIns;
export default axiosIns;
