import TextField from "@mui/material/TextField";
import React from "react";
import { useSelector } from "react-redux";



const ProformaTableTotalSumTd = ({data } : any) => { 

  return (
    <>
     <span>{data.totalSum}</span>
    </>
  );
};

export default ProformaTableTotalSumTd;
