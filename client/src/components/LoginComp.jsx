import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function LoginComp({ toggleLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false); // State for navigation

  if (localStorage.getItem("authToken")) {
    return <Navigate to={"/"} />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const formBody = formData;
    setFormData({ email: "", password: "" });
    try {
      setError(null);
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/user/login",
        formBody,
        {
          withCredentials: true,
        }
      );
      setLoading(false);
      const authToken = res.data.authToken;
      localStorage.setItem("authToken", authToken);
      setRedirect(true); // Trigger redirect
    } catch (error) {
      console.error("Login failed", error.response?.data || error.message);
      setLoading(false);
      setError(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-[30rem] bg-gray-100 flex flex-col p-4 rounded-md">
      <h2 className="text-center font-semibold text-3xl mb-5">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4 flex flex-col gap-2 max-w-96">
          <label htmlFor="email" className="font-medium text-lg">
            Email
          </label>
          <input
            required
            placeholder="xyz@gmail.com"
            id="email"
            type="email"
            className="p-1 pl-4 outline-blue-700 rounded-md"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className="mb-4 flex flex-col gap-2 max-w-96">
          <label htmlFor="password" className="font-medium text-lg">
            Password
          </label>
          <input
            placeholder="*******"
            id="password"
            type="password"
            className="p-1 pl-4 outline-blue-700 rounded-md"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        {error && <p className="text-red-500 text-sm my-2">{error}</p>}
        <button
          type="submit"
          className={`w-full my-5 p-1 rounded-md text-white font-semibold ${
            loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className="text-xs sm:text-sm">
        Don't have an account?
        <span
          className="text-blue-500 ml-1 cursor-pointer"
          onClick={toggleLogin}
        >
          Register
        </span>
      </p>
    </div>
  );
}

export default LoginComp;
