
import { useEffect, useState } from 'react'

import Input from '@mui/material/Input';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const MySwal = withReactContent(Swal)

const AddOrUpdateUser = ({ storageArray }: any) => {

    const [isloaded, setLoaded] = useState(false)
    const [isAxiosEnded, setisAxiosEnded] = useState(false)
    const [responseData, setResponseData] = useState<any[]>([]);

    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };


    useEffect(() => {

        if (!isloaded) {

        }


    }, []);




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

                            <Grid container spacing={2} >
                                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Required"
                                        defaultValue="Hello World"
                                        style={{ width: '400px', margin: '1em' }} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Required"
                                        defaultValue="Hello World"
                                        style={{ width: '400px', margin: '1em' }} />
                                </Grid>
                            </Grid>

                            <Grid container spacing={2} >
                                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <FormControl sx={{ minWidth: 200, marginTop: 2 }}>
                                        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-autowidth-label"
                                            id="demo-simple-select-autowidth"
                                            value={age}
                                            onChange={handleChange}
                                            autoWidth
                                            label="Age">
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Twenty</MenuItem>
                                            <MenuItem value={21}>Twenty one</MenuItem>
                                            <MenuItem value={22}>Twenty one and a half</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'center', }}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Required"
                                        defaultValue="Hello World"
                                        style={{ width: '600px', margin: '1em' }} />
                                </Grid>
                            </Grid>





                        </CardContent>
                    </Card>


                </div>
            </Box>

        </>
    );

}

export default AddOrUpdateUser

