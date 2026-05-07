import { Users, Plus } from "lucide-react";

export default function Staff() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Staff</h1>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">
            <Plus size={20} />
            Add Staff Member
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left py-6 px-8 font-medium text-gray-600">Name</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Role</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Department</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Phone</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-gray-50">
                <td className="py-6 px-8 font-medium">Dr. Sarah Chen</td>
                <td className="py-6 px-8">Cardiologist</td>
                <td className="py-6 px-8 text-gray-500">Cardiology</td>
                <td className="py-6 px-8 text-gray-500">07700 900123</td>
                <td className="py-6 px-8">
                  <span className="bg-green-100 text-green-700 px-5 py-1 rounded-3xl text-sm">Active</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-6 px-8 font-medium">Nurse Emily Patel</td>
                <td className="py-6 px-8">Nurse</td>
                <td className="py-6 px-8 text-gray-500">General Ward</td>
                <td className="py-6 px-8 text-gray-500">07700 900456</td>
                <td className="py-6 px-8">
                  <span className="bg-green-100 text-green-700 px-5 py-1 rounded-3xl text-sm">Active</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}