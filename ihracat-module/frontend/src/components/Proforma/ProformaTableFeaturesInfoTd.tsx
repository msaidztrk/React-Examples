import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import React from 'react'

const ProformaTableFeaturesInfoTd  = ({ data }: any) => {
  return (

    <> 
    <div className='flex justify-center'>
    <Autocomplete
    disablePortal

    options={[data.grup]} // Wrap marka in an array
    value={data.grup} // Directly pass data.barkod
    sx={{ width: 250 }}
    getOptionLabel={(option: string) => option}
    renderInput={(params) => <TextField {...params} label="GRUP" />}
  />  
    </div>
  

  <div className="mt-5 flex justify-center">
  <Autocomplete
    disablePortal

    options={[data.desen]} // Wrap marka in an array
    value={data.desen} // Directly pass data.barkod
    sx={{ width: 250 }}
    getOptionLabel={(option: string) => option}
    renderInput={(params) => <TextField {...params} label="DESEN" />}
  />
</div>


<div className="mt-5 flex justify-center">
<Autocomplete
  disablePortal

  options={[data.renk]} // Wrap marka in an array
  value={data.renk} // Directly pass data.barkod
  sx={{ width: 250 }}
  getOptionLabel={(option: string) => option}
  renderInput={(params) => <TextField {...params} label="RENK" />}
/>
</div>
</>
  )
}

export default ProformaTableFeaturesInfoTd