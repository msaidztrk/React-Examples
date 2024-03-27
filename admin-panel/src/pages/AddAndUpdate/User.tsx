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

const MySwal = withReactContent(Swal)

const AddOrUpdateUser = ({ storageArray }: any) => {

    const [isloaded, setLoaded] = useState(false)
    const [isAxiosEnded, setisAxiosEnded] = useState(false)
    const [responseData, setResponseData] = useState<any[]>([]);

    useEffect(() => {

        if (!isloaded) {

        }


    }, []);




    return (
        <> 
        
   
        </>
      );
      
}

export default AddOrUpdateUser

