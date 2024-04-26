import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { SyntheticEvent, useState } from "react";
import { palette } from "@mui/system";
import Button from "@mui/material/Button";
import { useNavigate, useNavigation } from "react-router-dom";



const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect , setRedirect] = useState(false);

  const navigate = useNavigate();
  

  const submitRegisterFormHandler =  async(e:any) => { 

    e.preventDefault(); 

    const response = await fetch('http://127.0.0.1:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password 
      })
    });   

    setRedirect(true);
    const content = await response.json();

  } 

  if(redirect){
    navigate('/login');
  }


  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography className="p-10" variant="subtitle1" component="div">
        Register
      </Typography>

      <div className="p-2">
        <TextField
          id="outlined-basic-1"
          label="Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="p-2">
        <TextField
          id="outlined-basic-2"
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="p-2">
        <TextField
          id="outlined-basic-2"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button variant="contained" onClick={submitRegisterFormHandler}>Contained</Button>
    </Box>
  );
};

export default Register;
