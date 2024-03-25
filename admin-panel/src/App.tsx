import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Signin from './pages/Login/Signin';

import * as React from 'react';
import { styled, createTheme } from '@mui/material/styles';
import Dashboard from "./pages/Dashborad";
import MainPage from "./MainPage";
import Login from "./pages/Login/Login";



function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Signin />} />
            <Route path="/" element={<Dashboard />}>
               <Route path="home" element={<MainPage />}></Route>
               <Route path="reports" element={<Signin />}></Route>
            </Route>
        </Routes>
      </BrowserRouter></>

  );
}
export default App


