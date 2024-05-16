import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React from "react";


import beden from "../../assets/beden.json"
import marka from "../../assets/marka.json"
import icerik from "../../assets/icerik.json"

const ProformaTableMainInfoTd = ({ data }: any) => {
  console.log(data);
  return (
    <>
     <div >
     <TextField
          id="outlined-error"
          label="BARKOD"
          defaultValue={data.barkod}
          sx={{ width: 260 }}
        />
     </div>
    

      <div className="mt-5 flex justify-center">
        <Autocomplete
          disablePortal
          id="combo"
          options={beden} // Wrap marka in an array
          value={""} // Directly pass data.barkod
          sx={{ width: 260 }}
          getOptionLabel={(option: string) => option}
          renderInput={(params) => <TextField {...params} label="BEDEN" />}
        />
      </div>

      <div className="mt-5 flex justify-center">
        <Autocomplete
          disablePortal
          id="combo"
          options={marka} // Wrap marka in an array
          value={""} // Directly pass data.barkod
          sx={{ width: 260 }}
          getOptionLabel={(option: string) => option}
          renderInput={(params) => <TextField {...params} label="MARKA" />}
        />
      </div> 

      <div className="mt-5 flex justify-center">
      <Autocomplete
        multiple
        id="tags-outlined"
        sx={{ width: 260 }}
        options={icerik} // Wrap marka in an array
        getOptionLabel={(option) : any=> option}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="İÇERİKLER"
            placeholder=""
          />
        )}
      />
      </div>
    </>
  );
};

export default ProformaTableMainInfoTd;
