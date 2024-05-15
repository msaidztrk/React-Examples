import { useState } from "react";

import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";

import PrivateRoutes from "./utils/PrivateRoute.tsx";
import { AuthProvider } from "./utils/AuthContext.tsx";

import Login from "./pages/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx";

import Header from './components/Header.tsx'
import Proforma from "./pages/Proforma.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter> 
      <AuthProvider>
        <Header/>
        <div style={{marginTop:'20px' , padding : '2rem'}}>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="proforma" element={<Proforma />} />

          </Route>

        </Routes>
        </div>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
