import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSuccess = (msg) =>{
     toast.success(msg, {
      position: "bottom-right",
   })
  }

  const handleError = (err) =>{
     toast.error(err, {
      position: "bottom-left",
   })
  }
    

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const { data } = await axios.post(
        "https://tradex-trading-platform.onrender.com/signup",
        formData,
        { withCredentials: true }
      );

      if (data.success) {
        handleSuccess(data.message)
        setTimeout(() => navigate("/login") , 1000);
      } else {
        handleError(data.message)
      }
    } catch (err) {
      toast.error("Something went wrong!");
    }finally{
      setLoading(false)
    }

    setFormData({
      username:"",
      email:"",
      password:""
    })
  };

  return (
    <div className="container my-5">
    <div className="row justify-content-center">
    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 p-4 p-md-5 shadow rounded">
      <h3 className="text-center mb-4">Create Account</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control p-2"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChanges}
            placeholder="username"
            required
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control p-2"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChanges}
            placeholder="email"
            required
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control p-2"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChanges}
            placeholder="password"
            required
          />
        </div>

        <button type="submit" className="btn btn-secondary mt-4 w-100" disabled={loading}>
          {loading ? "Signing up..." : "Sign up"}
        </button>

        <p className="mt-3 text-center">
          Already have an account? <Link to="/login" className="account">Login</Link>
        </p>
      </form>

      <ToastContainer />
    </div>
    </div>
    </div>
  );
};

export default Signup;
