import axios, { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth"; 

const useAxiosPrivate = () => {
    const refresh = useRefreshToken(); 
    const {auth} : any = useAuth();  

    useEffect(() => {


        const requestIntercept : any = axiosPrivate.interceptors.request.use(config => {
            if(!config.headers['Authorization']){
                config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
            }
            return config
        } , (error) => Promise.reject(error))

        const reponseIntercept = axiosPrivate.interceptors.response.use(
            response => response , 
            async(error) => {
                const prevRequest = error?.config; 
                if(error?.response.status == 403 && !prevRequest?.sent){
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest)
                }
            }
        );

        return () => {
            axiosPrivate.interceptors.response.eject(reponseIntercept);
        }


    } , [auth, refresh] )

    return axiosPrivate;

}

export default useAxiosPrivate;