export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Settings</h1>

        <div className="bg-white rounded-3xl shadow p-8 space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Account Information</h2>
            <div className="grid grid-cols-2 gap-6">
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
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Email notifications for new appointments</span>
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-600" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Daily patient summary report</span>
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-600" />
              </div>
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-medium transition">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}