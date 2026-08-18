import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../services/api';
import Button from '../ui/Button';

const SignupForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    try {
      await API.post('api/users/register/', formData);
      navigate('/login');
    } catch (error) {
      setErrorMsg(error.response?.data?.username?.[0] || error.response?.data?.detail || "Registration failed. Please check your details.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-6 font-sans">
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
          Create an account
        </h2>
        <p className="text-sm text-gray-500 font-medium">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Sign in here
          </Link>
        </p>
      </div>

      {errorMsg && (
        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-4">

          <div>
            <label className="block text-xs font-bold text-gray-700 tracking-wide mb-1.5">Username</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <User className="h-4 w-4" />
              </div>
              <input
                name="username"
                type="text"
                required
                placeholder="Choose a username"
                onChange={handleChange}
                className="w-full bg-white border border-gray-200 rounded-xl text-sm text-gray-900 font-medium placeholder-gray-400 pl-10 pr-4 py-3 transition-all focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 tracking-wide mb-1.5">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Mail className="h-4 w-4" />
              </div>
              <input
                name="email"
                type="email"
                required
                placeholder="name@example.com"
                onChange={handleChange}
                className="w-full bg-white border border-gray-200 rounded-xl text-sm text-gray-900 font-medium placeholder-gray-400 pl-10 pr-4 py-3 transition-all focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 tracking-wide mb-1.5">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Lock className="h-4 w-4" />
              </div>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                minLength={8}
                placeholder="Minimum 8 characters"
                onChange={handleChange}
                className="w-full bg-white border border-gray-200 rounded-xl text-sm text-gray-900 font-medium placeholder-gray-400 pl-10 pr-10 py-3 transition-all focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
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
          Get Started Free
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
