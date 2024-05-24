import Card from "@mui/material/Card";
import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { changeValue } from "../../redux/productSlice";
import { useSelector, useDispatch } from "react-redux";

interface RootState {
  products: {
    productLine: number;
    productsArray: any;
  };
}

const IngredientDetailsWrapper = ({ data, index, count, info }: any) => {
  console.log("info : ", info);

  const productsLine = index;

  const dispatch = useDispatch();
  const [selectedEn, setSelectedEn] = useState(info.en);
  const [selectedBoy, setSelectedBoy] = useState(info.boy);
  const [selectedAdet, setSelectedAdet] = useState(info.adet);
  const [selectedEk, setSelectedEk] = useState(info.ek); 

  const handleChange = (event: any, type: string) => {
    let eventVal = "";

    if (type == "en") {
      eventVal = event.target.value;
      setSelectedEn(eventVal);
    }

    if (type == "boy") {
      eventVal = event.target.value;
      setSelectedBoy(eventVal);
    }

    if (type == "adet") {
      eventVal = event.target.value;
      setSelectedAdet(eventVal);
    }

    if (type == "ek") {
      eventVal = event.target.value;
      setSelectedEk(eventVal);
    }

    dispatch(changeValue({ type: type, value: eventVal, indexRow: index , arrayIndex : count }));
  };



  return (
    <>
      <Card className={count > 0 ? "mt-10" : ""} variant="outlined">
        <p className="p-2">{info.isim} </p>
        <Divider />

        <div className="grid grid-rows-2 grid-flow-col gap-4  p-2">
          <div className="grid grid-rows-1 grid-flow-col gap-4">
            <div>
              <TextField
               onChange={(event) => handleChange(event, "en")}
                className="w-20  p-0"
                value={selectedEn}
                sx={{
                  "& .MuiInputBase-input": {
                    fontSize: 15,
                    height: 20,
                    padding: 1,
                  },
                }}
                label="EN"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div>
              <TextField
               onChange={(event) => handleChange(event, "boy")}
                value={selectedBoy}
                className="w-20  p-0"
                sx={{
                  "& .MuiInputBase-input": {
                    fontSize: 15,
                    height: 20,
                    padding: 1,
                  },
                }}
                label="BOY"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
          <div className="grid grid-rows-1 grid-flow-col gap-4">
            <div>
              <TextField
               onChange={(event) => handleChange(event, "adet")}
                value={selectedAdet}
                className="w-20  p-0"
                sx={{
                  "& .MuiInputBase-input": {
                    fontSize: 15,
                    height: 20,
                    padding: 1,
                  },
                }}
                label="ADET"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div>
              <TextField
               onChange={(event) => handleChange(event, "ek")}
                value={selectedEk}
                className="w-20  p-0"
                sx={{
                  "& .MuiInputBase-input": {
                    fontSize: 15,
                    height: 20,
                    padding: 1,
                  },
                }}
                label="EK"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default IngredientDetailsWrapper;
