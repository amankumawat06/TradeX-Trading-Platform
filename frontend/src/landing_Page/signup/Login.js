import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
    });
  };

  const handleError = (err) => {
    toast.success(err, {
      position: "bottom-left",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://tradex-trading-platform.onrender.com/login",
        formData,
        { withCredentials: true }
      );

      if (data.success) {
        handleSuccess(data.message);
        window.location.href = "https://tradex-dashboarrd.netlify.app";
        // setTimeout(() => navigate("/dashboard"), 1000);
      } else{
          handleError(data.message);
      }
    } catch (err) {
      toast.error("Something went wrong!!");
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container mt-5 mb-5 col-6 mt-2 mb-2 p-5">
      <h1 className="text-center mb-4">Welcome Back</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="form-control p-2"
            name="email"
            placeholder="Enter your email"
            id="email"
            onChange={handleChanges}
            value={formData.email}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control p-2"
            name="password"
            placeholder="Enter password"
            id="password"
            onChange={handleChanges}
            value={formData.password}
            required
          />
        </div>
        <button type="sybmit" className="btn btn-secondary mt-4 w-100">
          Login
        </button>

        <p className="mt-3 text-center">
          Don't have a account?&nbsp;
          <Link to="/signup">Create account </Link>
        </p>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Login;
