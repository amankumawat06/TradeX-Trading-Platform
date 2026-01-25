import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./style.css"

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
        window.location.href = "https://tradex-dashboard-three.vercel.app/";
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
    <div className="container my-5">
      <div className="row justify-content-center">
    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 p-4 p-md-5 shadow rounded">
      <h1 className="text-center mb-4">Login</h1>
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
          <Link to="/signup" className="account">Create account </Link>
        </p>
      </form>

      <ToastContainer />
    </div>
    </div>
    </div>
  );
};

export default Login;
