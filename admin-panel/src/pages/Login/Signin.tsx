import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';


import AuthContext from '../../context/AuthProvider';
import useAuth from '../../hooks/useAuth';

const LOGIN_URL = '/auth';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInSide() {

  window.history.replaceState(null, "Giriş Yap", "/login")


  const { setAuth }: any = useAuth();

  localStorage.removeItem('validation');
  localStorage.removeItem('array');

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [loginErrorMsg, setLoginErrorMsg] = useState('');

  const handleEmail = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState('');
  const handlePassword = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  };

  function send_login_request() {
    console.log(email, password);

    const formData = {
      token: 'Test-deneme',
      EmAil: email,
      password: password
    };


    let local_url = 'http://127.0.0.1:8000/api/login'

    axios.post(local_url, formData)
      .then(response => {
        console.log('response : ', response.data);

        if (response.status == 200) { 

          localStorage.setItem('validation', 'true');
          localStorage.setItem('array', JSON.stringify(response.data[0]));

          const id = response?.data[0]?.id;
          const name = response?.data[0]?.name;
          const status = response?.data[0]?.status;
          const email = response?.data[0]?.email;
          const token = response?.data[1];
          const accessToken = token;

          setAuth({ id , name, status, email , token , accessToken})

          setLoginError(false)
          navigate("/home");
        } else {
          setLoginError(true)
          setLoginErrorMsg(response.data)
        }

      })
      .catch(error => {
        console.log(error);
        setLoginError(true)
        setLoginErrorMsg(error.response.data)
      });


  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Stack sx={{ width: '100%' }} spacing={2}>
              {loginError == true ? <Alert variant="filled" severity="error">
                {loginErrorMsg}
              </Alert> : ''}
            </Stack>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleEmail}
                value={email}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handlePassword}
                value={password}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="button"
                onClick={send_login_request}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}