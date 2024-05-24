import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React, { ChangeEvent, useState } from "react";

import beden from "../../assets/beden.json";
import marka from "../../assets/marka.json";
import icerik from "../../assets/icerik.json";
import { changeValue } from "../../redux/productSlice";
import { useDispatch } from "react-redux";
import Chip from "@mui/material/Chip";

const ProformaTableMainInfoTd = ({ data, index }: any) => {
  console.log(data);

  const dispatch = useDispatch();
  const [selectedBarkod, setSelectedBarkod] = useState(data.barkod);
  const [selectedBeden, setSelectedBeden] = useState(data.beden);
  const [selectedMarka, setSelectedMarka] = useState(data.marka);
  const [selectedIcerik, setSelectedIcerik] = useState<any>(data.ingredients);

  const handleChange = (event: any, type: string) => {
    let eventVal = "";

    if (type == "barkod") {
      eventVal = event.target.value;
      setSelectedBarkod(eventVal);
    }

    if (type == "beden") {
      eventVal = event.target.innerText;
      setSelectedBeden(eventVal);
    }

    if (type == "marka") {
      eventVal = event.target.innerText;
      setSelectedMarka(eventVal);
    }

    dispatch(changeValue({ type: type, value: eventVal, indexRow: index }));
  };

  const handleInput = (event: React.SyntheticEvent, values: string[]) => {
    setSelectedIcerik(values); // Update selectedIcerik state with the array of selected values
    dispatch(changeValue({ type: "icerik", value: values, indexRow: index }));
  };

  return (
    <>
      <div>
        <TextField
          id="outlined-error"
          label="BARKOD"
          defaultValue={selectedBarkod}
          onChange={(event) => handleChange(event, "barkod")}
          sx={{ width: 260 }}
        />
      </div>

      <div className="mt-5 flex justify-center">
        <Autocomplete
          id=""
          options={beden} // Ensure beden is an array of strings
          value={selectedBeden} // Assuming data.barkod is the value you want to set
          isOptionEqualToValue={(option, value) => option === value}
          onChange={(event) => handleChange(event, "beden")}
          sx={{ width: 260 }}
          getOptionLabel={(option: string) => option || ""} // Assuming beden is an array of strings
          renderInput={(params) => <TextField {...params} label="BEDEN" />}
        />
      </div>

      <div className="mt-5 flex justify-center">
        <Autocomplete
          disablePortal
          id=""
          options={marka} // Wrap marka in an array
          value={selectedMarka}
          onChange={(event) => handleChange(event, "marka")}
          sx={{ width: 260 }}
          getOptionLabel={(option: string) => option || ""}
          renderInput={(params) => <TextField {...params} label="MARKA" />}
        />
      </div>

      <div className="mt-5 flex justify-center">
        <Autocomplete
          multiple
          id="tags-outlined"
          sx={{ width: 260 }}
          options={icerik}
          value={selectedIcerik}
          onChange={handleInput}
          getOptionLabel={(option) => option}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} label="İÇERİKLER" placeholder="" />
          )}
        />
      </div>
    </>
  );
};

export default ProformaTableMainInfoTd;
