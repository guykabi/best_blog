import axios from "axios"; 

//Set base url for api requests
const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_POST_URL
});


export default axiosInstance;