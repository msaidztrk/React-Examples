import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Layout from "./components/Layout";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Box from "@mui/material/Box"; 



const defaultTheme = createTheme();


function App() {
  const [count, setCount] = useState(0); 


  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        
        <Container component="main" maxWidth="xs">
          
          <CssBaseline />

          <Layout>
           
              <BrowserRouter>
              <Nav
                  mode={"light"}
                  toggleColorMode={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                /> 
                 <Box
              sx={{
                marginTop: 15,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />

                  <Route path="/" element={<Home />} />
                </Routes>
                </Box>
              </BrowserRouter>
    
          </Layout>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
