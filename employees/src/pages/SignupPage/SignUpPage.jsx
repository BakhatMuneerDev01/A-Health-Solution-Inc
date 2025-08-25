import React, { useState } from "react";
import { assets } from "../../assets/assets";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6">
      <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <img
            src={assets.healthlogo}
            alt="A Health Logo"
            className="h-20 w-40"
          />
        </div>

        {/* Switch buttons */}
        <div className="flex flex-row items-center justify-center gap-3.5 mb-8">
          <Button variant="secondary" size="large">
            Login
          </Button>
          <Button variant="primary" size="large">
            Register
          </Button>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Username */}
          <div className="relative">
            <InputField
              label="Username"
              type="text"
              name="username"
              placeholder="Enter your username"
              required
            />
            <img
              src={assets.User}
              className="w-4 h-4 absolute top-9 right-3"
              alt="user icon"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <InputField
              label="Email Address"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <img
              src={assets.User}
              className="w-4 h-4 absolute top-9 right-3"
              alt="email icon"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <InputField
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-9 right-3 cursor-pointer"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <img
                src={showPassword ? assets.Eye : assets.EyeClose}
                className="w-4 h-4"
                alt="toggle password visibility"
              />
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <InputField
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-9 right-3 cursor-pointer"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <img
                src={showPassword ? assets.Eye : assets.EyeClose}
                className="w-4 h-4"
                alt="toggle password visibility"
              />
            </button>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            variant="primary"
            size="large"
            className="w-full"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
