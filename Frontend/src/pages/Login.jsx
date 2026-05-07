import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stethoscope, User, Lock } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const demoAccounts = {
      "admin@hospital.com": "admin123",
      "doctor@hospital.com": "doctor123",
      "nurse@hospital.com": "nurse123",
      "reception@hospital.com": "reception123"
    };

    if (demoAccounts[form.email] && demoAccounts[form.email] === form.password) {
      setLoading(false);
      navigate("/dashboard");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        navigate("/dashboard");
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch {
      setError("Could not connect to server. Using demo mode.");
      setTimeout(() => navigate("/dashboard"), 800);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584118624012-df056829fbd0')] bg-cover bg-center opacity-10" />

      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
        
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-10 text-white text-center">
          <Stethoscope size={60} className="mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Hospital Management System</h1>
          <p className="text-blue-100 mt-2">Efficient Patient Care</p>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
            Sign in to your account
          </h2>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <User className="absolute left-4 top-3.5 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
                  placeholder="admin@hospital.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 text-gray-400" size={20} />
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl transition duration-200 text-lg disabled:opacity-70"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-10">
            <p className="text-center text-gray-500 text-sm mb-4">Demo Accounts</p>
            
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="font-medium text-blue-700">System Administrator</div>
                <div className="text-gray-600 text-xs mt-1">admin@hospital.com</div>
                <div className="text-gray-500 text-xs">admin123</div>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="font-medium text-blue-700">Doctor</div>
                <div className="text-gray-600 text-xs mt-1">doctor@hospital.com</div>
                <div className="text-gray-500 text-xs">doctor123</div>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="font-medium text-blue-700">Nurse</div>
                <div className="text-gray-600 text-xs mt-1">nurse@hospital.com</div>
                <div className="text-gray-500 text-xs">nurse123</div>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="font-medium text-blue-700">Receptionist</div>
                <div className="text-gray-600 text-xs mt-1">reception@hospital.com</div>
                <div className="text-gray-500 text-xs">reception123</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 pb-6">
          © 2026 Hospital Management System
        </div>
      </div>
    </div>
  );
}