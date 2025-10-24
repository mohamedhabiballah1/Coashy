import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import api from "../api/axios";
import logo from "../assets/logo.png";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "COACH",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const res = await api.post("/auth/login", {
          email: formData.email,
          password: formData.password,
        });
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      } else {
        const res = await api.post("/auth/register", formData);
        console.log("✅ Registered successfully:", res.data);
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="relative w-[90%] max-w-[550px] h-[700px] perspective">
        <div
          className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
            isLogin ? "rotate-y-0" : "rotate-y-180"
          }`}
        >
          {/* LOGIN FACE */}
          <div className="absolute inset-0 w-full h-full bg-white rounded-2xl  p-10 flex flex-col items-center justify-start overflow-y-auto backface-hidden transition-all duration-700 ease-in-out">
            <img
              src={logo}
              alt="Coachy Logo"
              className="w-20 mb-6 drop-shadow-sm transition-transform duration-700 hover:scale-105"
            />
          
            <div className="flex gap-3 mb-10 transition-all duration-500">
            <button
                onClick={() => setIsLogin(true)}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-500 ease-in-out
                  ${
                    isLogin
                      ? "border border-[#545963] text-black bg-white scale-105 shadow-sm"
                      : "text-[#616068] bg-transparent hover:scale-105"
                  }`}
              >
                <FaSignInAlt
                  className={`text-[12px] transition-colors duration-500 ${
                    isLogin ? "text-black" : "text-[#616068]"
                  }`}
                />
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-500 ease-in-out
                  ${
                    !isLogin
                      ? "border border-[#545963] text-black bg-white scale-105 shadow-sm"
                      : "text-[#616068] bg-transparent hover:scale-105"
                  }`}
              >
                <FaUserPlus
                  className={`text-[12px] transition-colors duration-500 ${
                    !isLogin ? "text-black" : "text-[#616068]"
                  }`}
                />
                Sign Up
              </button>
            </div>

            {/* Login form */}
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-5 animate-fadeIn"
            >
              <div>
                <span className="text-[#545963] text-sm px-1">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black transition-all duration-300"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <span className="text-[#545963] text-sm px-1">Password</span>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black transition-all duration-300"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                Login
              </button>
            </form>

            {error && (
              <p className="text-red-500 mt-3 text-sm animate-fadeIn">{error}</p>
            )}

            <div className="flex items-center justify-center w-full my-5">
              <div className="border-t border-gray-300 w-full"></div>
              <span className="px-2 text-gray-500 text-sm">or</span>
              <div className="border-t border-gray-300 w-full"></div>
            </div>

            <button className="flex items-center justify-center gap-2 w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all duration-300">
              <FaGoogle className="text-red-500" />
              <span>Sign in with Google</span>
            </button>

            <p className="mt-4 text-gray-600 text-sm text-center">
              Don’t have an account yet?{" "}
              <span
                onClick={() => setIsLogin(false)}
                className="text-black font-semibold cursor-pointer hover:underline transition-all"
              >
                Sign Up
              </span>
            </p>
          </div>

          {/* REGISTER FACE */}
          <div className="absolute inset-0 w-full h-full bg-white rounded-2xl p-10 flex flex-col items-center justify-start overflow-y-auto backface-hidden rotate-y-180 transition-all duration-700 ease-in-out">
            <img
              src={logo}
              alt="Coachy Logo"
              className="w-20 mb-6 drop-shadow-sm transition-transform duration-700 hover:scale-105"
            />

<div className="flex gap-3 mb-10 transition-all duration-500">
            <button
                onClick={() => setIsLogin(true)}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-500 ease-in-out
                  ${
                    isLogin
                      ? "border border-[#545963] text-black bg-white scale-105 shadow-sm"
                      : "text-[#616068] bg-transparent hover:scale-105"
                  }`}
              >
                <FaSignInAlt
                  className={`text-[12px] transition-colors duration-500 ${
                    isLogin ? "text-black" : "text-[#616068]"
                  }`}
                />
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-500 ease-in-out
                  ${
                    !isLogin
                      ? "border border-[#545963] text-black bg-white scale-105 shadow-sm"
                      : "text-[#616068] bg-transparent hover:scale-105"
                  }`}
              >
                <FaUserPlus
                  className={`text-[12px] transition-colors duration-500 ${
                    !isLogin ? "text-black" : "text-[#616068]"
                  }`}
                />
                Sign Up
              </button>
            </div>

            {/* Register form */}
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4 animate-fadeIn"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-1/2 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black transition-all duration-300"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-1/2 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black transition-all duration-300"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black transition-all duration-300"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black transition-all duration-300"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <select
                name="role"
                className="w-full px-4 py-2 border rounded-lg outline-none transition-all duration-300"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="COACH">Coach</option>
                <option value="CLIENT">Client</option>
              </select>

              <button
                type="submit"
                className="mt-2 w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                Register
              </button>
            </form>

            {error && (
              <p className="text-red-500 mt-3 text-sm animate-fadeIn">{error}</p>
            )}

            <div className="flex items-center justify-center w-full my-5">
              <div className="border-t border-gray-300 w-full"></div>
              <span className="px-2 text-gray-500 text-sm">or</span>
              <div className="border-t border-gray-300 w-full"></div>
            </div>

            <button className="flex items-center justify-center gap-2 w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all duration-300">
              <FaGoogle className="text-red-500" />
              <span>Register with Google</span>
            </button>

            <p className="mt-4 text-gray-600 text-sm text-center">
              Already have an account?{" "}
              <span
                onClick={() => setIsLogin(true)}
                className="text-black font-semibold cursor-pointer hover:underline transition-all"
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
