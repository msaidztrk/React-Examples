import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Signin from './pages/Login/Signin';
import Dashboard from "./pages/Dashborad";
import MainPage from "./MainPage";
import Permissions from "./pages/Permissions/Permissions";
import Warehouse from "./pages/Warehouse/WarehouseList";

import * as React from 'react';

import { useEffect } from "react";




function App() { 
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {

  const location = useLocation();
  const navigate = useNavigate();

  const [storageVal, setStorageVal] = React.useState(localStorage.getItem('validation'));
  const [storageArray, setStorageArray] = React.useState(localStorage.getItem('array'));

  useEffect(() => { 

    let storage_val : string | null = localStorage.getItem('validation');  
    setStorageVal(storageVal); 

    let storage_array : any = localStorage.getItem('array');  
    setStorageArray(storage_array)

    const isLoginRoute = location.pathname === '/login';

    if (isLoginRoute === false && storage_val == null) {
      navigate("/login");
    }

  }, []); // Empty dependency array ensures the effect runs only once after the initial render


  return (
    <Routes>
      <Route path="/login" element={<Signin />} />
      <Route path="/" element={<Dashboard storageArray={storageArray} />}>
        <Route path="home" element={<MainPage />} />
        <Route path="permissions" element={<Permissions storageArray={storageArray} />} />
        <Route path="warehouse-list" element={<Warehouse storageArray={storageArray} />} />
      </Route> 
      <Route path="*" element={<Signin />} />
    </Routes>
  );
  
}
 

export default App


