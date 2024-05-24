import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React from "react";
import ProformaTableMainInfoTd from "./ProformaTableMainInfoTd";
import ProformaTableFeaturesInfoTd from "./ProformaTableFeaturesInfoTd";
import ProformaTableMoneyInfoTd from "./ProformaTableMoneyInfoTd";
import ProformaTableTotalSumTd from "./ProformaTableTotalSumTd";
import ProformaTableIngredientDetailsTd from "./ProformaTableIngredientDetailsTd";

const ProformaTableRow = ({ data, index }: any) => {


  console.log("ProformaTableRow : ", index);


  const handeDeleteRow = () => {
    dispatch(changeValue({ type: type, value: eventVal, indexRow: index , arrayIndex : count }));
  };

  return ( 
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
       {index + 1}
      </TableCell>
      <TableCell align="center">
        <ProformaTableMainInfoTd data={data}  index={index} />
      </TableCell>
      <TableCell align="center">
        <ProformaTableIngredientDetailsTd data={data}  index={index} />
      </TableCell>
      <TableCell align="center">
        <ProformaTableFeaturesInfoTd data={data}  index={index} />
      </TableCell>
      <TableCell align="center">
        <ProformaTableMoneyInfoTd data={data}  index={index}/>
      </TableCell>
      <TableCell align="center">
        <ProformaTableTotalSumTd  data={data} />
      </TableCell>
      <TableCell align="center">
        <Button variant="outlined" onClick={handeDeleteRow}>Ürün Ekle</Button>
      </TableCell>
    </TableRow>
  );
};

export default ProformaTableRow;
