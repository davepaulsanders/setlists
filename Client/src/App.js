import React, { useState } from "react";
import { SetListForm } from "../src/components/setListForm/setListForm";
import MiniMetronome from "../src/components/MiniMetronome/MiniMetronome";
import SetList from "../src/components/setList/setList";
import logo from "./audio/setlists-logo.png";

export const App = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [logIn, setLogIn] = useState(false);

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
          setLogIn(true);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (logIn === false) {
    return (
      <div className="App flex flex-col items-center">
        <img
          className="logo mt-24 mb-8"
          src={logo}
          style={{ width: "20rem" }}
          alt="setlist-creator-logo"
        ></img>

        <div className="login-container bg-white border-2 border-black rounded px-5 py-10 flex flex-col justify-center items-center">
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
            <a className="underline text-purple hover:text-black" href="">
              here!
            </a>
          </h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App flex justify-center items-center flex-col m-0 p-0">
        <img
          className="logo pt-5 mt-12 px-3 w-50 pb-5 max-w-400"
          src={logo}
          alt="setlist-creator-logo"
        ></img>
        <div className="setlist-grid flex flex-col justify-center items-center w-full md:w-1/2">
          <div className="setlist-actions w-11/12 rounded-md bg-white overflow-auto shadow-md max-h-96 mb-5">
            <SetList />
          </div>
          <div className="w-full flex justify-center items-center">
            <MiniMetronome />
          </div>
        </div>
        <SetListForm />
      </div>
    );
  }
};
