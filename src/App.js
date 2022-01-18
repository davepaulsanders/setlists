import React from "react";
import "./App.css";
import { SetListForm } from "../src/components/setListForm/setListForm";
import Metronome from "../src/components/Metronome/Metronome";
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
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <img className="logo" src={logo} alt="setlist-creator-logo"></img>
        <hr></hr>
        <div className="setlist-grid">
          <div className="setlist-actions">
            <SetList />
          </div>
          <div className="metronome-container">
            <Metronome />
          </div>
        </div>
        <SetListForm />
      </div>
    );
  }
};
