import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../audio/setlists-logo.png";
import { setLogIn } from "../../features/LogInSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName: userName, passWord: passWord }),
      });
      if (response) {
        const jsonResponse = await response.json();
        if (jsonResponse.message) {
          console.log(jsonResponse.message);
        } else {
          dispatch(setLogIn(true));
          navigate("/");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App flex flex-col items-center">
      <img
        className="logo w-80 md:w-3/5 max-w-2xl mt-24 mb-8"
        src={logo}
        alt="setlist-creator-logo"
      ></img>

      <div className="login-container md:w-3/5 max-w-2xl bg-white border-2 border-black rounded-md px-5 py-10 flex flex-col justify-center items-center">
        <h1 className="login-prompt mb-2 text-2xl">
          Please <span className="text-purple font-bold">log in</span> to save
          setlists!
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <input
            onChange={(e) => setUserName(e.target.value)}
            className="username m-3 mt-5 p-1 w-60 border rounded"
            type="text"
            placeholder="Username"
          ></input>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="password rounded border w-60 p-1"
            type="password"
            placeholder="Password"
          ></input>
          <button className="login-button rounded bg-primary m-2 mt-5 p-1 w-20">
            Log in
          </button>
        </form>
        <h2 className="mt-3">
          Don't have an account? Register{" "}
          <a
            className="underline text-purple hover:text-black"
            href="/register"
          >
            here!
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Login;
