import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../audio/setlists-logo.png";

function Register() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName: userName, passWord: passWord }),
      });
      if (response) {
        const jsonResponse = await response.json();
        if (jsonResponse) {
          const message = document.getElementById("register-prompt");
          message.style =
            "color: rgb(255, 71, 21); font-size: 1.255rem; text-align: center";
          message.innerHTML = "Account created, redirecting to log in page!";

          const timeout = setTimeout(() => {
            navigate("/login");
          }, 2000);
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
        <h1 className="register-prompt mb-2 text-2xl" id="register-prompt">
          Register a <span className="text-purple font-bold">username</span> and{" "}
          <span className="text-purple font-bold">password </span>
          here!
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
            Register
          </button>
        </form>
        <h2 className="mt-3">
          Already have an account? Log in{" "}
          <a className="underline text-purple hover:text-black" href="/login">
            here!
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Register;
