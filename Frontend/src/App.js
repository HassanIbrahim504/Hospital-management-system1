import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import Doctors from "./pages/Doctors";
import LabResults from "./pages/LabResults";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
        <Route path="/patients" element={<><Navbar /><Patients /></>} />
        <Route path="/appointments" element={<><Navbar /><Appointments /></>} />
        <Route path="/doctors" element={<><Navbar /><Doctors /></>} />
        <Route path="/lab-results" element={<><Navbar /><LabResults /></>} />
        <Route path="/profile" element={<><Navbar /><Profile /></>} />
      </Routes>
    </Router>
  );
}

export default App;