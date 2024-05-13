import axios from 'axios';
import { useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton'; 

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
    const [isAxiosEnded, setisAxiosEnded] = useState(false)
    const [responseData, setResponseData] = useState<any[]>([]);

    useEffect(() => {

        if (!isloaded) {
            let userObj = JSON.parse(storageArray) as { token: string };
            let form_data = createForm("Test-deneme", userObj!.token, 1, 20, "CurrentCode", "DESC");

            axios.post('http://127.0.0.1:8000/api/DUYUII/CustomerBalance/GetlistPaging', form_data)
                .then(response => {
                    console.log(response.data);
                    if (response.status === 200) {
                        setResponseData(response.data[0]);
                        setisAxiosEnded(true)
                    }
                })
                .catch(error => {
                    MySwal.fire(<p>${error.response.data}</p>)

                });
            setLoaded(true)
        }


    }, []);




    return (
        <> 
        
          {isAxiosEnded ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Modül</TableCell>
                    <TableCell align="center">Değer</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Assuming responseData is an array of objects */}
                  {responseData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{row.Field}</TableCell>
                      <TableCell align="center">{row.Value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Skeleton variant="rectangular" width={'100%'} height={'100vh'} />
          )}
        </>
      );
      
}

export default GetlistPaging

