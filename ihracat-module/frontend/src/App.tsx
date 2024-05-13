import { useState } from "react";

import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";

import PrivateRoutes from "./utils/PrivateRoute.tsx";
import { AuthProvider } from "./utils/AuthContext.tsx";

import Login from "./pages/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx";

import Header from './components/Header.tsx'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter> 
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
