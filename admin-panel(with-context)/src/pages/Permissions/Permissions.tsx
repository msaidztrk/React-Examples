
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';






export default function BasicTable({storageArray } : any) { 

    let userObj :  Array<any> = JSON.parse(storageArray);
    userObj = Object.entries(userObj).slice(10, 20);

    console.log("userObj : ",userObj);

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
        {userObj.map(([name, value], index) => (
          <TableRow key={index}>
            <TableCell align="center" scope="row">{name}</TableCell>
            <TableCell align="center">{value.toString()}</TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}