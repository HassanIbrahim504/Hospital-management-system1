import { Calendar, Plus } from "lucide-react";

export default function Appointments() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Appointments</h1>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">
            <Plus size={20} />
            New Appointment
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-6 px-8 font-medium text-gray-600">Time</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Patient</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Doctor</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Reason</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-6 px-8 font-medium">09:30</td>
                <td className="py-6 px-8">Emma Thompson</td>
                <td className="py-6 px-8">Dr. Sarah Chen</td>
                <td className="py-6 px-8 text-gray-600">Follow-up Checkup</td>
                <td className="py-6 px-8">
                  <span className="bg-green-100 text-green-700 px-5 py-1 rounded-3xl text-sm">Confirmed</span>
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="py-6 px-8 font-medium">10:15</td>
                <td className="py-6 px-8">James Wilson</td>
                <td className="py-6 px-8">Dr. Michael Patel</td>
                <td className="py-6 px-8 text-gray-600">Blood Test Review</td>
                <td className="py-6 px-8">
                  <span className="bg-yellow-100 text-yellow-700 px-5 py-1 rounded-3xl text-sm">Pending</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}