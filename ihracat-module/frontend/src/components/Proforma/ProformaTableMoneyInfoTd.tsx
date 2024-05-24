import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeValue } from "../../redux/productSlice";

import birimPara from "../../assets/birimPara.json"

const ProformaTableMoneyInfoTd = ({ data , index }: any) => {

  console.log("ProformaTableMoneyInfoTd RENDERED!!!! index  : " , index); 


  const [selectedAdet, setSelectedAdet] = useState(data.adet);
  const [selectedFiyat, setSelecteFiyat] = useState(data.fiyat);
  const [selectedBirimPara, setSelectedBirimPara] = useState(data.olcuPara);


  const dispatch = useDispatch();

  const handleAdetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAdet(event.target.value);
    dispatch(changeValue({ type : 'adet'  , value : event.target.value , indexRow : index}));
  };
  const handleFiyatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelecteFiyat(event.target.value);
    dispatch(changeValue({ type : 'fiyat'  , value : event.target.value , indexRow : index}));
  }; 
  const handleBirimParaChange = (event: React.SyntheticEvent, value: any) => {
    console.log(value);
    setSelectedBirimPara(value);
    dispatch(changeValue({ type: 'olcuPara', value: value, indexRow: index }));
  };


  return (
    <>
    <div className="flex justify-center">
    <TextField
        id="outlined-error"
        label="ADET"
        value={selectedAdet} 
        onChange={handleAdetChange }
        sx={{ width: 150 }}
      />
    </div>

      <div className="mt-5 flex justify-center">
        <TextField
          id="outlined-error"
          label="FİYAT"
          value={selectedFiyat} 
          onChange={handleFiyatChange }
          sx={{ width: 150 }}
        />
      </div>{" "}
      <div className="mt-5 flex justify-center">
        <Autocomplete
          disablePortal
          options={birimPara} // Wrap marka in an array
          value={selectedBirimPara} // Directly pass data.barkod
          isOptionEqualToValue={(option, value) => option === value}
          onChange={handleBirimParaChange}
          sx={{ width: 150 }}
          getOptionLabel={(option: string) => option || ""}
          renderInput={(params) => <TextField {...params} label="BİRİM" />}
        />
      </div>
    </>
  );
};

export default ProformaTableMoneyInfoTd;
