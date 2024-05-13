import { useContext, useState, useEffect, createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext<any | null>(null);

interface User {
    email: string;
    password: string;
  } 

export const AuthProvider = ({ children }:any) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null); 

  const { setLocalItem  , getLocalItem , removeLocalItem} = useLocalStorage()
  
 
  useEffect(() => {
    // checkUserStatus()
 
  }, []);


  const loginUser = async (email : string , password : string) => {
    setLoading(true) 

    try { 

        if(email == 'sa' && password == 'as')
            setUser({ email, password }); // Set user data with type safety
        else
            setUser(null)


    }catch(err){

        console.log(err)

    }

    setLoading(false);
  }

  const logoutUser = () => {
    
  } 


 // const registerUser = (userInfo) => {} 

  const checkUserStatus =  async (userInfo) => {

    try{

    }catch(err){
        console.log(err)
    }


    setLoading(false);
  }

  const contextData = {
    user,
    loginUser,
    logoutUser,
   // registerUser,
  
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {return useContext(AuthContext)}

export default AuthContext;
