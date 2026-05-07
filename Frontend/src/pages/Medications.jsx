import { Pill, Plus } from "lucide-react";

export default function Medications() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Medications</h1>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">
            <Plus size={20} />
            Add Medication
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left py-6 px-8 font-medium text-gray-600">Medication Name</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Stock</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Expiry Date</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Supplier</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-gray-50">
                <td className="py-6 px-8 font-medium">Paracetamol 500mg</td>
                <td className="py-6 px-8">1,240 tablets</td>
                <td className="py-6 px-8 text-gray-500">Mar 2027</td>
                <td className="py-6 px-8 text-gray-500">PharmaCorp</td>
                <td className="py-6 px-8">
                  <span className="bg-green-100 text-green-700 px-5 py-1 rounded-3xl text-sm">In Stock</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-6 px-8 font-medium">Amoxicillin 250mg</td>
                <td className="py-6 px-8">320 capsules</td>
                <td className="py-6 px-8 text-gray-500">Nov 2026</td>
                <td className="py-6 px-8 text-gray-500">MediSupply</td>
                <td className="py-6 px-8">
                  <span className="bg-yellow-100 text-yellow-700 px-5 py-1 rounded-3xl text-sm">Low Stock</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}