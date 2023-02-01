import React, { useState } from 'react';
import axios from 'axios';
import FormLabel from '@mui/material/FormLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField, FormControl, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import { dateConverter,passwordValidation,checkEmpty,validEmail,validMobileNumber } from '../../utility/genericHelpers';
import "react-datepicker/dist/react-datepicker.css";


const PatientSignup = () => {

  const [value, setValue] = React.useState();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("")
  const [password, setPassword] = useState("")
  const [gender, setGender] = useState("male")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileError,setMobileError] = useState(false);
  const [passwordError,setPasswordError] = useState(false)
  const [confirmPasswordError,setConfirmPasswordError] = useState(false)
  const [nameError,setNameError] = useState(false)

  const submitData = async (e) => {
    e.preventDefault();
    try {
      setError(false)
      await axios.post('http://my-doctors.net:8090/patients', {
        firstName: fullName,
        gender: gender,
        profile: {
          dob: dateConverter(value.$d)
        },
        email: email,
        password: password,
        contactNumber: mobileNumber,
      });
      setSuccess(true)
    }
    catch (error) {
      setError(true)
    }
  }

  async function checkEmail() {
    setEmailError('')
    setEmailError(validEmail(email));
    await axios.get(`http://my-doctors.net:8090/accounts?email=${email}`).catch(error => setEmailError("Email already exist"))
  }

  async function checkMobileNumber(){
   setMobileError('')
   setMobileError(validMobileNumber(mobileNumber))
   await axios.get(`http://my-doctors.net:8090/accounts?contactNumber=${mobileNumber}`).catch(error => setMobileError("Mobile number already exist"))
  }

  async function checkPassword(){
    setConfirmPasswordError('')
    if(confirmPassword !== password || checkEmpty(confirmPassword) ){
      setConfirmPasswordError('Confirm Password must match Current Password')
     }
  }

  const  disable = () => {
    return error ||  emailError || mobileError || passwordError || confirmPasswordError || checkEmpty(fullName) || checkEmpty(mobileNumber) || checkEmpty(email) || checkEmpty(password) || checkEmpty(confirmPassword)
  }

  const checkFullName = () => {
    setNameError(false);
    if(checkEmpty(fullName)){
      setNameError('Please enter a valid name')
    }
  }




  return (
    <div>
      {success && <span>Profile created successfully.</span>}
      {error && <p>Profile does not created.</p>}
      <form onSubmit={submitData}>
        <TextField id="outlined-basic" type="text" label="Full Name" variant="outlined"
          fullWidth
          value={fullName}
          onChange={(e) => setFullName(e.target.value)} 
          onBlur={() => checkFullName()}/>
          {nameError && <span style={{color:'red'}}>{nameError}</span>}
        <br /><br />

        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup row name="row-radio-buttons-group" value={gender} onChange={(e) => setGender(e.target.value)} required>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <br /><br />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date of Birth"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            variant="outlined"
            renderInput={(params) => <TextField {...params} />}
            fullWidth
          />
        </LocalizationProvider>
        <br /> <br />
        <TextField id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email" fullWidth
          value={email}
          onChange={e => setEmail(e.target.value)}
          onBlur={() => checkEmail()} />
        {emailError && <span style={{color:'red'}}>{emailError}</span>}
        <br /><br />
        <TextField id="outlined-basic"
          label="Mobile Number"
          variant="outlined"
          fullWidth value={mobileNumber}
          onChange={e => setMobileNumber(e.target.value)} 
          onBlur={() => checkMobileNumber()} />
          {mobileError && <span style={{color:'red'}}>{mobileError}</span>}
        <br /><br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password} onChange={e => setPassword(e.target.value)}
          onBlur={() => setPasswordError(passwordValidation(password))}
        />
        {passwordError && <span style={{color:'red'}}>{passwordError}</span>}
        <br /><br />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          onBlur={() => checkPassword()}
        />
        {confirmPasswordError && <span style={{color:'red'}} >{confirmPasswordError}</span>}
        <br /><br />
        <button type="submit" disabled={disable()}>Submit</button>
      </form>
    </div>
  )
}

export default PatientSignup;