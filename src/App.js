import React from "react";
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Dashboard from "./Pages/dashboard";
import PatientSignup from "./Pages/patientSignUp/patientSignup";
import DoctorSignUp from "./Pages/doctorSignup";
import NotFound from "./Pages/notFound";
import Tabs from "./Pages/Tab/Tab";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route exact path="/patientSignUp" element={<PatientSignup/>}/>
          <Route exact path="/doctorSignUp" element={<DoctorSignUp/>}/>
          <Route exact path="/login" element={<Tabs/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
  );
}

export default App;
