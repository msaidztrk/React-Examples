import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React from "react";
import ProformaTableMainInfoTd from "./ProformaTableMainInfoTd";

const ProformaTableRow = ({ data , index }: any) => {

  return (
    <TableRow
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        1
      </TableCell>
      <TableCell align="right">
        
        <ProformaTableMainInfoTd data={[data.barkod , data.marka]}/>
       </TableCell>
      <TableCell align="right">{data.marka}</TableCell>
      <TableCell align="right">{data.beden}</TableCell>
      <TableCell align="right">{data.ingredients}</TableCell>
      <TableCell align="right">{data.olcuPara}</TableCell>
      <TableCell align="right">
        <Button variant="outlined">Ürün Ekle</Button>
      </TableCell>
    </TableRow>
  );
};

export default ProformaTableRow;
