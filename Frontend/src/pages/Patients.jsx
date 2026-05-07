import { Users, Plus } from "lucide-react";

export default function Patients() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Patients</h1>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">
            <Plus size={20} />
            Add New Patient
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left py-6 px-8 font-medium text-gray-600">Patient Name</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Patient ID</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Age</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Gender</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Last Visit</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-gray-50">
                <td className="py-6 px-8 font-medium">Emma Thompson</td>
                <td className="py-6 px-8 text-gray-500">PAT-23891</td>
                <td className="py-6 px-8">34</td>
                <td className="py-6 px-8">Female</td>
                <td className="py-6 px-8 text-gray-500">Today</td>
                <td className="py-6 px-8">
                  <span className="bg-green-100 text-green-700 px-5 py-1 rounded-3xl text-sm">Active</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-6 px-8 font-medium">James Wilson</td>
                <td className="py-6 px-8 text-gray-500">PAT-23892</td>
                <td className="py-6 px-8">51</td>
                <td className="py-6 px-8">Male</td>
                <td className="py-6 px-8 text-gray-500">2 days ago</td>
                <td className="py-6 px-8">
                  <span className="bg-blue-100 text-blue-700 px-5 py-1 rounded-3xl text-sm">Follow-up</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}