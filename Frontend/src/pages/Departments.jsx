import { Building2 } from "lucide-react";

export default function Departments() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Departments</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl shadow p-6 hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <Building2 size={32} className="text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold">Cardiology</h3>
                <p className="text-gray-500">18 doctors • 245 patients</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow p-6 hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <Building2 size={32} className="text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold">General Medicine</h3>
                <p className="text-gray-500">24 doctors • 312 patients</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow p-6 hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <Building2 size={32} className="text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold">Pediatrics</h3>
                <p className="text-gray-500">12 doctors • 98 patients</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow p-6 hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <Building2 size={32} className="text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold">Surgery</h3>
                <p className="text-gray-500">15 doctors • 67 patients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}