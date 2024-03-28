
import { useEffect, useState } from 'react'

import Input from '@mui/material/Input';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button, Grid, Typography } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const MySwal = withReactContent(Swal)

const AddOrUpdateUser = ({ storageArray }: any) => {

    const navigate = useNavigate();

    const authInfo = JSON.parse(storageArray);

    const [isloaded, setLoaded] = useState(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [updatingUser, setUpdatingUser] = useState<string>('0');

    const local_url = 'http://127.0.0.1:8000/api';

    useEffect(() => {
        const fetchData = async () => {
            const queryParameters = new URLSearchParams(window.location.search);
            const user_id: string | null = queryParameters.get("i");

            if (user_id !== null) {
                setUpdatingUser(user_id);
                const formData = {
                    token: 'Test-deneme',
                    id: user_id as string,
                    auth: authInfo.id as string
                };

                try {
                    const [msg, data] = await post_axios('/get-user-info', formData);
                    if (msg === 'success') {
                        setEmail(data.data.email)
                        setPassword(data.data.password_text);
                        setName(data.data.name);
                        setStatus(data.data.status);
                    }
                } catch (error) {
                    navigate(-1)
                    console.error('Error:', error);
                }
            }
        };

        fetchData(); // Invoke the async function immediately

    }, []);



    const handleChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value as string);
    };

    async function submitForm() {

        const formData = {
            token: 'Test-deneme',
            email: email as string,
            password: password as string,
            name: name as string,
            status: status as string,
            auth_id: authInfo.id as string,
            update_id: updatingUser as any
        };




        try {
            let url = '';
            if (updatingUser == '0')
                 url = '/create-user';
            else {
                 url = '/update-user';
            }
            const [msg, data] = await post_axios(url, formData);
            if (msg === 'success') {
                MySwal.fire(<p>Kullanıcı Oluşturuldu</p>);
            }
        } catch (error : any) {
            // Handle error
            if(error?.response?.data == 'User Already Exist')
                MySwal.fire(<p>İşlem Başarısız</p>);
            console.error('Error !!:', error);
        }




    }

    async function post_axios(url: string, formData: object): Promise<[string, any]> {
        console.log("positng to : ", url);
        try {
            const response = await axios.post(local_url + url, formData);
            console.log('response:', response);
            return ['success', response];
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                MySwal.fire(<p>{error.response?.data}</p>);
            }
            throw error; // Re-throw the error for the calling function to handle
        }
    }



    return (
        <>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off">
                <div>

                    <Card sx={{ minWidth: '100%', p: 10 }}>
                        <CardContent>

                            <Grid container spacing={2} style={{ border: '1px solid black', borderRadius: 10, paddingTop: 10, display: 'flex', justifyContent: 'center', }} >

                                <Typography variant="h3" gutterBottom>
                                    Kullanıcı Ekle
                                </Typography>

                            </Grid>
                            <Grid container spacing={2} >
                                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        style={{ width: '400px', margin: '1em' }} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Şifre"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        style={{ width: '400px', margin: '1em' }} />
                                </Grid>
                            </Grid>

                            <Grid container spacing={2} >
                                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end', }}>
                                    <FormControl sx={{ minWidth: 200, marginTop: 2, marginRight: 4 }}>
                                        <InputLabel id="demo-simple-select-autowidth-label">Yetki</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-autowidth-label"
                                            id="demo-simple-select-autowidth"
                                            onChange={handleChange}
                                            value={status}
                                            autoWidth
                                            label="Yetki">
                                            <MenuItem value={2}>Admin</MenuItem>
                                            <MenuItem value={3}>Müşteri</MenuItem>
                                            <MenuItem value={4}>Kullanıcı</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={6} >
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="İsim"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        style={{ width: '400px', margin: '1em' }} />
                                </Grid>
                            </Grid>

                            <Button variant="contained" onClick={submitForm}>Ekle</Button>




                        </CardContent>
                    </Card>


                </div>
            </Box>

        </>
    );

}

export default AddOrUpdateUser

