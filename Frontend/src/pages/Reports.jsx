import { Activity } from "lucide-react";

export default function Reports() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Reports</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Monthly Summary</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Patients Treated</span>
                <span className="text-2xl font-bold text-blue-600">342</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Appointments Completed</span>
                <span className="text-2xl font-bold text-cyan-600">189</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Lab Tests Processed</span>
                <span className="text-2xl font-bold text-emerald-600">87</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Patient Discharge Report</p>
                  <p className="text-gray-500">Generated today</p>
                </div>
                <span className="text-green-600">✓ Ready</span>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Doctor Performance</p>
                  <p className="text-gray-500">Last 7 days</p>
                </div>
                <span className="text-green-600">✓ Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}