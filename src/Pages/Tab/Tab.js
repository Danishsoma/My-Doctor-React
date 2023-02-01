import React,{useState} from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Header from '../../Components/header';
import Footer from '../../Components/footer';
import PatientSignup from '../patientSignUp/patientSignup';
import DoctorSignUp from '../doctorSignup';
import { Box, Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import { TextField,Button } from '@material-ui/core';
import axios from 'axios';
import Login from '../login/login';


export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 }}>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <img src="/images/final registration.svg" alt="image" />
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ width: '80%', typography: 'body1', border:'1px solid black' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Login" value="1" style={{width:'33.33%'}}/>
                    <Divider orientation="vertical" flexItem />
                    <Tab label="Patient Register" value="2" style={{width:'33.33%'}} />
                    <Divider orientation="vertical" flexItem />
                    <Tab label="Doctor Register" value="3" style={{width:'33.33%'}} />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Login />
                </TabPanel>
                <TabPanel value="2">
                  <PatientSignup />
                </TabPanel>
                <TabPanel value="3">
                  <DoctorSignUp />
                </TabPanel>
              </TabContext>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>

  );
}