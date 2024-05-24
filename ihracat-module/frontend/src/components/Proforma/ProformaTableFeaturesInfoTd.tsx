import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react' 


import renk from "../../assets/renk.json"
import desen from "../../assets/desen.json"
import grup from "../../assets/grup.json"
import { useDispatch } from 'react-redux'
import { changeValue } from '../../redux/productSlice'

const ProformaTableFeaturesInfoTd  = ({ data , index }: any) => {

  const [selectedDesen, setSelectedDesen] = useState(data.desen);
  const [selectedRenk, setSelectedRenk] = useState(data.renk);
  const [selectedGrup, setSelectedGrup] = useState(data.grup); 

  const dispatch = useDispatch();

  const handleDesenChange = (event: React.SyntheticEvent, value: any) => {
    setSelectedDesen(value);
    dispatch(changeValue({ type: 'desen', value: value, indexRow: index }));
  };

  const handleRenkChange = (event: React.SyntheticEvent, value: any) => {
    setSelectedRenk(value);
    dispatch(changeValue({ type: 'renk', value: value, indexRow: index }));
  };

  const handleGrupChange = (event: React.SyntheticEvent, value: any) => {
    setSelectedGrup(value);
    dispatch(changeValue({ type: 'grup', value: value, indexRow: index }));
  };


  return (

    <> 
    <div className='flex justify-center'>
    <Autocomplete
    disablePortal
    options={grup} // Wrap marka in an array
    value={selectedGrup} // Directly pass data.barkod
    sx={{ width: 250 }}
    isOptionEqualToValue={(option, value) => option === value}
    onChange={handleGrupChange}
    getOptionLabel={(option: string) => option || ""}
    renderInput={(params) => <TextField {...params} label="GRUP" />}
  />  
    </div>
  

  <div className="mt-5 flex justify-center">
  <Autocomplete
    disablePortal
    options={desen} // Wrap marka in an array
    value={selectedDesen} // Directly pass data.barkod
    isOptionEqualToValue={(option, value) => option === value}
    onChange={handleDesenChange}
    sx={{ width: 250 }}
    getOptionLabel={(option: string) => option || ""}
    renderInput={(params) => <TextField {...params} label="DESEN" />}
  />
</div>


<div className="mt-5 flex justify-center">
<Autocomplete
  disablePortal
  isOptionEqualToValue={(option, value) => option === value}
  onChange={handleRenkChange}
  options={renk} // Wrap marka in an array
  value={selectedRenk} // Directly pass data.barkod
  sx={{ width: 250 }}
  getOptionLabel={(option: string) => option || ""}
  renderInput={(params) => <TextField {...params} label="RENK" />}
/>
</div>
</>
  )
}

export default ProformaTableFeaturesInfoTd