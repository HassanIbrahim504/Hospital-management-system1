import { Package, Plus } from "lucide-react";

export default function Inventory() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Inventory</h1>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">
            <Plus size={20} />
            Add Item
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left py-6 px-8 font-medium text-gray-600">Item Name</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Category</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Quantity</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Location</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-gray-50">
                <td className="py-6 px-8 font-medium">Surgical Gloves</td>
                <td className="py-6 px-8 text-gray-500">Medical Supplies</td>
                <td className="py-6 px-8">2,450 pairs</td>
                <td className="py-6 px-8 text-gray-500">Store Room A</td>
                <td className="py-6 px-8">
                  <span className="bg-green-100 text-green-700 px-5 py-1 rounded-3xl text-sm">In Stock</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-6 px-8 font-medium">IV Drip Sets</td>
                <td className="py-6 px-8 text-gray-500">Equipment</td>
                <td className="py-6 px-8">180 units</td>
                <td className="py-6 px-8 text-gray-500">Store Room B</td>
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