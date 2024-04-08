import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";


const RequireAuth = ({ allowedRoles }: any) => {
    const { auth }: any = useAuth();
    const location = useLocation();

    

    return ( auth?.token ? <Outlet />
        : <Navigate to="/login" state={{ from: location }} replace />);
}


export default RequireAuth;