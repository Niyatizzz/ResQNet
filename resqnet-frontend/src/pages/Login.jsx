import React from "react";
import { Link } from "react-router-dom";

const NewLoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Welcome to ResQNet
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NewLoginPage;
