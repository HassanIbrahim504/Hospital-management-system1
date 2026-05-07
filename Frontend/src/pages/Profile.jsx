import { User, Lock } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Profile</h1>

        <div className="bg-white rounded-3xl shadow p-8">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-4xl font-bold text-blue-600">
              A
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Dr. Alex Rivera</h2>
              <p className="text-gray-500">System Administrator</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
              <input 
                type="text" 
                defaultValue="Dr. Alex Rivera"
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
              <input 
                type="email" 
                defaultValue="admin@hospital.com"
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
              />
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-medium transition">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}