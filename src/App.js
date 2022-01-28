import React from "react";
import { SetListForm } from "../src/components/setListForm/setListForm";
//import Metronome from "../src/components/Metronome/Metronome";
import MiniMetronome from "../src/components/MiniMetronome/MiniMetronome";
import SetList from "../src/components/setList/setList";
import logo from "./audio/setlists-logo.png";
let isLoggedIn = true;

export const App = () => {
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
        <div className="login-container">
          <h1 className="login-prompt">Please log in to save setlists!</h1>
          <form>
            <input
              className="username"
              type="text"
              placeholder="Username"
            ></input>
            <br></br>
            <input
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
