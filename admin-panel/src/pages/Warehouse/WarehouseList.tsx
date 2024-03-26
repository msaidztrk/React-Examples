import axios from 'axios';
import { useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function createForm(
    token: string,
    user_token: any | null,
    PageNumber: number,
    PageSize: number,
    SortBy: string,
    SortDirection: string

) {
    return { token, user_token, PageNumber, PageSize, SortBy, SortDirection };
}

const MySwal = withReactContent(Swal)

const GetlistPaging = ({ storageArray }: any) => {

    const [isloaded, setLoaded] = useState(false)
    const [responseData, setResponseData] = useState<any[]>([]);

    useEffect(() => {

        if (!isloaded) {
            let userObj = JSON.parse(storageArray) as { token: string };
            let form_data = createForm("RasyoIoToken2021", userObj!.token, 1, 20, "CurrentCode", "DESC");

            axios.post('https://duyu.alter.net.tr/api/DUYUII/CustomerBalance/GetlistPaging', form_data)
                .then(response => {
                    console.log(response.data);
                    if (response.status === 200) {
                        setResponseData(response.data[0]);
                    }
                })
                .catch(error => {
                    MySwal.fire(<p>${error.response.data}</p>)

                });
            setLoaded(true)
        }


    }, []);




    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Modül</TableCell>
                        <TableCell align="center">Değer</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>


                    {responseData.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell align="center">{row.Field}</TableCell>{/* Adjust property name */}
                            <TableCell align="center">{row.Field}</TableCell>{/* Adjust property name */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default GetlistPaging

