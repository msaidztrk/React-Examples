import * as React from 'react';
import { styled, createTheme } from '@mui/material/styles';
import Dashboard from '../Dashborad';
import { Outlet } from 'react-router-dom';


export default function Home() {

  return (
    <>
        <Dashboard />
    </>
    
  );
}