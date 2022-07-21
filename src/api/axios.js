import axios from "axios";

// connection to these api
// export default axios.create({
// m baseURL: 'https://permission-api675.herokuapp.com/'

// b 'https://blog-perm.herokuapp.com/api/'
// })

 const baseURL = "https://blog-perm.herokuapp.com/api/";

const axiosInstance = axios.create({
    baseURL: baseURL
})

export default axiosInstance

// export const baseURL = "https://blog-perm.herokuapp.com/api/";
// export const reg_url = baseURL + "register";
// export const login_url = baseURL + "login";
// export const search_url = baseURL + "search/";
// export const deleted_url = baseURL + "postblogs/";
