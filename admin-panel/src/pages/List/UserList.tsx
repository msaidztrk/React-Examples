
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Button from '@mui/material/Button';


const MySwal = withReactContent(Swal)

interface User {
    id: number;
    email: string;
    name: string;
    status: string;
}

export default function BasicTable({ authObject }: any) {

    const [allUsers, setAllUsers] = useState<User[]>([]);

    function createForm(
        token: string,
        auth: string

    ) {
        return { token, auth };
    }


    console.log("authObject : ", authObject);



    useMemo(() => {
        let form_data = createForm("Test-deneme", authObject!.id);

        axios.post('http://127.0.0.1:8000/api/get-all-users', form_data)
            .then(response => {
                console.log(response.data);
                if (response.status === 200) {
                    setAllUsers(response.data)
                }
            })
            .catch(error => {
                MySwal.fire(<p>${error.response.data}</p>)

            });


    }, []);

    const handleDelete = async (userId: number) => {
        console.log('Editing user with ID:', userId);

        const formData = {
            token: 'Test-deneme',
            auth: authObject!.id as string,
            delete_id: userId as number
        };

        try {
            const [msg, data] = await make_post_axios('delete-user', formData);
            if (msg === 'success') {
                MySwal.fire(<p>Kullanıcı Silindi</p>);
                setAllUsers(allUsers.filter((user) => user.id !== userId));
            }
        } catch (error: any) {
            MySwal.fire(<p>{error?.response?.data}</p>);
            console.error('Error !!:', error);
        }


    };

    async function make_post_axios(url: string, formData: object): Promise<[string, any]> {
        console.log("positng to : ", url);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/' + url, formData);
            console.log('response:', response);
            return ['success', response];
        } catch (error: unknown) {
            throw error; // Re-throw the error for the calling function to handle
        }
    }



    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Mail</TableCell>
                        <TableCell align="center">İsim</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">İşlemler</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allUsers.length > 0 ? (
                        allUsers.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell align="center" >{user.email}</TableCell>
                                <TableCell align="center">{user.name}</TableCell>
                                <TableCell align="center">

                                    {user.status === '1' && 'Süper Admin'}
                                    {user.status === '2' && 'Admin'}
                                    {user.status === '3' && 'Müşteri'}
                                    {user.status === '4' && 'Kullanıcı'}
                                    {user.status !== '1' && user.status !== '2' && user.status !== '3' && (
                                        '' // Display '-' for unknown status values
                                    )}</TableCell>
                                <TableCell align="center" sx={{ display: 'flex', justifyContent: 'space-evenly' }} >

                                    <Button variant="contained" href={`/kullanici-ekle?i=${user.id}`} >
                                        <EditIcon />
                                    </Button>


                                    <Button variant="contained" color="error" onClick={() => handleDelete(user.id)} >
                                        <DeleteForeverIcon />
                                    </Button>

                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={2} align="center">Loading data...</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}