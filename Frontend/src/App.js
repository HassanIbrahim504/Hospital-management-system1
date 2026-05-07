import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import Doctors from "./pages/Doctors";
import LabResults from "./pages/LabResults";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route 
          path="/dashboard" 
          element={
            <div>
              <Navbar />
              <Dashboard />
            </div>
          } 
        />

        <Route 
          path="/patients" 
          element={
            <div>
              <Navbar />
              <Patients />
            </div>
          } 
        />

        <Route 
          path="/appointments" 
          element={
            <div>
              <Navbar />
              <Appointments />
            </div>
          } 
        />

        <Route 
          path="/doctors" 
          element={
            <div>
              <Navbar />
              <Doctors />
            </div>
          } 
        />

        <Route 
          path="/lab-results" 
          element={
            <div>
              <Navbar />
              <LabResults />
            </div>
          } 
        />

        <Route 
          path="/profile" 
          element={
            <div>
              <Navbar />
              <Profile />
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}
