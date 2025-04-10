import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";

const SignUp = ({ isLogin, setIsLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rank: "",
    percentile: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex min-h-screen bg-white overflow-hidden">
      {/* Left Section - Form */}
      <motion.div 
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full md:w-1/2 p-6 md:p-8 flex flex-col items-center justify-center"
      >
        <div className="w-full max-w-md">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
          >
            Create Account
          </motion.h1>

          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            <div className="space-y-2">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                required
              />
            </div>

            <div className="space-y-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                required
              />
            </div>

            <div className="flex">
              <div className="bg-yellow-400 text-white p-4 rounded-l-full flex items-center justify-center min-w-16">
                +91
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 p-4 border border-gray-300 rounded-r-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                required
              />
            </div>

            <div className="flex gap-4">
              <input
                type="text"
                name="rank"
                placeholder="JEE Rank"
                value={formData.rank}
                onChange={handleChange}
                className="w-1/2 p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
              />
              <input
                type="text"
                name="percentile"
                placeholder="Percentile"
                value={formData.percentile}
                onChange={handleChange}
                className="w-1/2 p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
              />
            </div>

            <div className="space-y-2">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                required
              />
            </div>

            <div className="text-center space-y-4">
              <Link
                to="/auth"
                className="text-gray-600 hover:text-yellow-500 transition"
                onClick={(e) => {
                  e.preventDefault();
                  setIsLogin(!isLogin);
                }}
              >
                Already have an Account? Sign In
              </Link>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full p-4 bg-yellow-400 text-white rounded-full font-medium hover:bg-yellow-500 transition-colors"
            >
              Create Account
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="w-full p-4 bg-white border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <FaGoogle className="text-red-500" />
              Sign Up with Google
            </motion.button>
          </motion.form>
        </div>
      </motion.div>

      {/* Right Section - Yellow Background with Text */}
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="hidden md:flex md:w-1/2 bg-gradient-to-br from-yellow-400 to-yellow-500 items-center justify-center rounded-l-3xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-10 text-center p-8"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Community!</h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Start your journey with us.
            <br />
            Together, we'll achieve your goals.
          </p>
          <div className="mt-8">
            <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl font-bold text-yellow-500">CT</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignUp;
