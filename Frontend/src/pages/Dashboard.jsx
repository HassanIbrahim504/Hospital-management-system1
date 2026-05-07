import { Stethoscope, Users, Calendar, Activity } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-500">Welcome back, Administrator</p>
          </div>
          <div className="text-sm text-gray-500">
            {new Date().toLocaleDateString('en-GB', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-3xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Patients</p>
                <p className="text-4xl font-bold text-blue-600 mt-2">1,284</p>
              </div>
              <Users size={48} className="text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Today's Appointments</p>
                <p className="text-4xl font-bold text-cyan-600 mt-2">47</p>
              </div>
              <Calendar size={48} className="text-cyan-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Available Doctors</p>
                <p className="text-4xl font-bold text-emerald-600 mt-2">18</p>
              </div>
              <Stethoscope size={48} className="text-emerald-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Pending Lab Results</p>
                <p className="text-4xl font-bold text-amber-600 mt-2">12</p>
              </div>
              <Activity size={48} className="text-amber-500" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Users size={20} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium">New Patient Registered</p>
                <p className="text-sm text-gray-500">John Smith • Just now</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl">
              <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                <Calendar size={20} className="text-cyan-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Appointment Completed</p>
                <p className="text-sm text-gray-500">Dr. Emily Chen • 2 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}