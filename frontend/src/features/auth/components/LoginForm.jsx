import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../../services/api';
import { jwtDecode } from 'jwt-decode';
import Button from '../../../components/ui/Button';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const response = await API.post("/api/token/", {
        username: username,
        password: password,
      });

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      const decoded = jwtDecode(response.data.access);
      
      if (decoded.role === "AUTHORITY") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data);
      setErrorMsg(error.response?.data?.detail || "Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-6 font-sans">
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
          Welcome back
        </h2>
        <p className="text-sm text-gray-500 font-medium">
          Don't have an account yet?{' '}
          <Link to="/signup" className="font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Sign up for free
          </Link>
        </p>
      </div>

      {errorMsg && (
        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
          {errorMsg}
        </div>
      )}

      <form className="space-y-5" onSubmit={handleLogin}>
        <div className="space-y-4">

          <div>
            <label className="block text-xs font-bold text-gray-700 tracking-wide mb-1.5">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <User className="h-4 w-4" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full bg-white border border-gray-200 rounded-xl text-sm text-gray-900 font-medium placeholder-gray-400 pl-10 pr-4 py-3 transition-all focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 tracking-wide mb-1.5">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Lock className="h-4 w-4" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white border border-gray-200 rounded-xl text-sm text-gray-900 font-medium placeholder-gray-400 pl-10 pr-10 py-3 transition-all focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3.5 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>

        <Button
          type="submit"
          isLoading={isLoading}
          className="w-full py-3.5 text-sm"
          icon={ArrowRight}
        >
          Sign In to CivicTrack
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
