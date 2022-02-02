import React, { useState } from "react";
import { SetListForm } from "../src/components/setListForm/setListForm";
//import Metronome from "../src/components/Metronome/Metronome";
import MiniMetronome from "../src/components/MiniMetronome/MiniMetronome";
import SetList from "../src/components/setList/setList";
import logo from "./audio/setlists-logo.png";
let isLoggedIn = false;

export const App = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName: userName, passWord: passWord }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (isLoggedIn === false) {
    return (
      <div className="App">
        <img
          className="logo"
          src={logo}
          style={{ width: "25rem" }}
          alt="setlist-creator-logo"
        ></img>
        <hr></hr>
        <div className="login-container flex flex-col justify-center items-center">
          <h1 className="login-prompt">Please log in to save setlists!</h1>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setUserName(e.target.value)}
              className="username"
              type="text"
              placeholder="Username"
            ></input>
            <br></br>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="password"
              type="text"
              placeholder="Password"
            ></input>
            <button className="login-button">Log in</button>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App flex justify-center items-center flex-col m-0 p-0">
        <img
          className="logo pt-5 px-3 w-50 pb-5 max-w-400"
          src={logo}
          alt="setlist-creator-logo"
        ></img>
        <div className="setlist-grid w-80 md:w-1/2 max-w-2xl">
          <div className="setlist-actions rounded-md bg-white overflow-auto shadow-md max-h-96 mb-5">
            <SetList />
          </div>
          <div className="metronome-container flex justify-center w-100">
            <MiniMetronome />
          </div>
        </div>
        <SetListForm />
      </div>
    );
  }
};
