import * as React from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";


import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counterSlice"
;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
];

interface RootState {
  counter: {
    productLine: number;
  };
}

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const Proforma = () => {
  const count = useSelector((state: RootState) => state.counter.productLine);
  const dispatch = useDispatch();

  const insertNewProduct = () => {
    dispatch(increment());
  };

  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col gap-2 bg-teal-100 p-2" >
        <div>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField {...params} label="Alici Secin" />
            )}
          />
        </div>

        <div>
          <Autocomplete
            disablePortal
            id="combo-box"
            options={top100Films}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField {...params} label="Satici Secin" />
            )}
          />
        </div>

        <div>
          <TextField id="filled-basic" label="Fatura Girin" variant="filled" />
        </div>

        <div>
          <TextField id="filled-basic" label="Banka Isim" variant="filled" />
        </div>
      </div>

      <div className="mt-3 bg-slate-200 p-2">
        <div className="grid grid-rows-1 grid-flow-col gap-2">
          <Button variant="outlined" 
          onClick={insertNewProduct} >
            Ürün Ekle
          </Button>

          <p className="text-xl font-semibold ">{count} adet ürün bulunmakta</p>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> 

      <div className="mt-3">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>SIRA</TableCell>
            <TableCell>ÜRÜN İSİM</TableCell>
            <TableCell align="right">ÜRÜN İÇERİĞİ</TableCell>
            <TableCell align="right">GRUP/DESEN/RENK</TableCell>
            <TableCell align="right">ADET/FİYAT/BİRİM</TableCell>
            <TableCell align="right">TOPLAM TUTAR</TableCell>
            <TableCell align="right">İŞLEMLER</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        </TableBody>
      </Table>
    </TableContainer>
</div>



    </>
  );
};

export default Proforma;
