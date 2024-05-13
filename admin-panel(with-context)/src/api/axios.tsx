import axios from "axios";
const BASE_RUL = 'http://127.0.0.1:8000/api/';


export default axios.create({
    baseURL : BASE_RUL
})

export const axiosPrivate =  axios.create({
    baseURL : BASE_RUL , 
    headers : { 'Content-Type' : 'application/json'   },
    withCredentials : true
})