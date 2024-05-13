import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {


    const { setAuth }: any = useAuth();

    const refresh = async () => {
        const response = await axios.get('refresh-token', {
            withCredentials: true
        });

        console.log("refresh_token : ", JSON.stringify(response));

        setAuth((prev: any) => {
            console.log("refresh_token : ", JSON.stringify(prev));
            console.log(response.data.accessToken);
            return { ...prev, 
                token: response.data.accessToken }
        });

        return response.data.accessToken;

    }

    return refresh;

}


export default useRefreshToken;