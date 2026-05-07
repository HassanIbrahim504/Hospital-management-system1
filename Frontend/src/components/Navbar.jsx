import { Link } from "react-router-dom";
import { Stethoscope, Users, Calendar, Activity, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center gap-3">
            <Stethoscope size={28} className="text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">HMS</span>
          </div>

          <div className="flex items-center gap-8">
            <Link to="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
              <Activity size={20} />
              Dashboard
            </Link>
            <Link to="/patients" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
              <Users size={20} />
              Patients
            </Link>
            <Link to="/appointments" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
              <Calendar size={20} />
              Appointments
            </Link>
            <Link to="/doctors" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
              <Stethoscope size={20} />
              Doctors
            </Link>
            <Link to="/lab-results" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
              <Activity size={20} />
              Lab Results
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/profile" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
              <User size={20} />
              Profile
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}