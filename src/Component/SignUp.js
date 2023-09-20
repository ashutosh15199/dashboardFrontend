import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);
  const collectData = async () => {
    try {
      let response = await Axios.post(
        "http://localhost:4000/register",
        JSON.stringify({ name, email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200 || response.status === 201) {
        const result = response.data;
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/");
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="container">
      <h3 className="head">Register</h3>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        className="inputBox"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <input
        className="inputBox"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button className="btn" onClick={() => collectData()}>
        SignUp
      </button>
    </div>
  );
};

export default SignUp;
