import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react"; 

import { useSelector, useDispatch } from 'react-redux'
import {
     decrement, increment 
  } from '../redux/counterSlice'




  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
  ];

  interface RootState {
    counter: {
      value: number;
    };
  }

const Proforma = () => {


  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch()

 const insertNewProduct = () => {
    dispatch(increment())
  };



  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col gap-2">
        <div>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
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
            sx={{ width: 300 }}
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

      <div className="mt-3"> 

      <div className="grid grid-rows-1 grid-flow-col gap-2">

       
        <Button variant="outlined" onClick={insertNewProduct}>
          Ürün Ekle
        </Button>  

        <p  className="text-xl font-semibold ">{count} adet ürün bulunmakta</p> 

        <div></div> 
        <div></div>  
        <div></div>  
        <div></div>  

        </div> 



      </div>
    </>
  );
};

export default Proforma;
