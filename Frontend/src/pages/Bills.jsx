import { CreditCard } from "lucide-react";

export default function Bills() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Bills & Payments</h1>

        <div className="bg-white rounded-3xl shadow">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left py-6 px-8 font-medium text-gray-600">Patient</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Bill ID</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Date</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Amount</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-gray-50">
                <td className="py-6 px-8 font-medium">Emma Thompson</td>
                <td className="py-6 px-8 text-gray-500">BILL-7842</td>
                <td className="py-6 px-8 text-gray-500">Today</td>
                <td className="py-6 px-8 font-medium text-red-600">$245.00</td>
                <td className="py-6 px-8">
                  <span className="bg-red-100 text-red-700 px-5 py-1 rounded-3xl text-sm">Unpaid</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-6 px-8 font-medium">James Wilson</td>
                <td className="py-6 px-8 text-gray-500">BILL-7841</td>
                <td className="py-6 px-8 text-gray-500">Yesterday</td>
                <td className="py-6 px-8 font-medium">$89.50</td>
                <td className="py-6 px-8">
                  <span className="bg-green-100 text-green-700 px-5 py-1 rounded-3xl text-sm">Paid</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}