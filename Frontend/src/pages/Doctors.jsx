import { Stethoscope, Plus } from "lucide-react";

export default function Doctors() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Doctors</h1>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition">
            <Plus size={20} />
            Add Doctor
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Stethoscope size={28} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Dr. Sarah Chen</h3>
                <p className="text-gray-500 text-sm">Cardiologist</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600">Available today • 8 patients scheduled</p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Stethoscope size={28} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Dr. Michael Patel</h3>
                <p className="text-gray-500 text-sm">General Physician</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600">Available today • 12 patients scheduled</p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Stethoscope size={28} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Dr. Emily Rodriguez</h3>
                <p className="text-gray-500 text-sm">Pediatrician</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600">On leave until Friday</p>
          </div>
        </div>
      </div>
    </div>
  );
}