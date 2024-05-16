import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React from "react";

const ProformaTableMoneyInfoTd = ({ data , index }: any) => {

  console.log("index  : " , index);

  return (
    <>
    <div className="flex justify-center">
    <TextField
        id="outlined-error"
        label="ADET"
        defaultValue={data.adet}
        sx={{ width: 150 }}
      />
    </div>

      <div className="mt-5 flex justify-center">
        <TextField
          id="outlined-error"
          label="FİYAT"
          defaultValue={data.fiyat}
          sx={{ width: 150 }}
        />
      </div>{" "}
      <div className="mt-5 flex justify-center">
        <Autocomplete
          disablePortal
          options={[data.olcuPara]} // Wrap marka in an array
          value={data.olcuPara} // Directly pass data.barkod
          sx={{ width: 150 }}
          getOptionLabel={(option: string) => option}
          renderInput={(params) => <TextField {...params} label="BİRİM" />}
        />
      </div>
    </>
  );
};

export default ProformaTableMoneyInfoTd;
