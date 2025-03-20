import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import {app_url} from '../Constant'

const Login = () => {
  const handleGoogleLogin = (credentialResponse)=>{
    const response = jwtDecode(credentialResponse.credential)
    console.log(app_url)

  }
  return (
    <div className="flex h-screen">
      {/* Left Side - Image Section */}
      <div className="hidden md:flex w-1/2 bg-orange-500 items-center justify-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
          alt="Swiggy Logo"
          className="h-28"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Login to Swiggy</h2>
          
          <form className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-200"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <p className="mx-4 text-gray-500 text-sm">or</p>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Google Sign In Button */}
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => {
                console.log('Login Failed');
            }}
            />


          {/* Signup Link */}
          {/* <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account? <a href="#" className="text-orange-500 hover:underline">Sign up</a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
