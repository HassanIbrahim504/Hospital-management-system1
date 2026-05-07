import { Activity } from "lucide-react";

export default function LabResults() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Lab Results</h1>

        <div className="bg-white rounded-3xl shadow">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left py-6 px-8 font-medium text-gray-600">Patient</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Test Type</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Date</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Result</th>
                <th className="text-left py-6 px-8 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-gray-50">
                <td className="py-6 px-8 font-medium">Emma Thompson</td>
                <td className="py-6 px-8">Blood Test</td>
                <td className="py-6 px-8 text-gray-500">Today</td>
                <td className="py-6 px-8">Normal</td>
                <td className="py-6 px-8">
                  <span className="bg-green-100 text-green-700 px-5 py-1 rounded-3xl text-sm">Ready</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-6 px-8 font-medium">James Wilson</td>
                <td className="py-6 px-8">X-Ray</td>
                <td className="py-6 px-8 text-gray-500">Yesterday</td>
                <td className="py-6 px-8">Abnormal</td>
                <td className="py-6 px-8">
                  <span className="bg-yellow-100 text-yellow-700 px-5 py-1 rounded-3xl text-sm">Review</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}