import React from 'react';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';


const DoctorSignUp = () => {
   
   const [value, setValue] = React.useState();


   return (
    <div>
        <TextField id="outlined-basic" type="text" label="Full Name*" variant="outlined" fullWidth  />
       <br /><br />

      <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup row name="row-radio-buttons-group">
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
   
    <br /> <br />
    <TextField id="outlined-basic"  label="Email" variant="outlined" fullWidth  />
    <br /><br />
    <TextField id="outlined-basic"  label="Mobile Number" variant="outlined" fullWidth  />
    <br /><br />
    <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          fullWidth
     />
   <br /><br />
   <TextField
          label="Confirm Password"
          type="password"
          fullWidth
   />
    <br /><br />
    <Button variant="contained">Submit</Button>
    </div>
   )
}

export default DoctorSignUp;