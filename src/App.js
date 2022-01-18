import React from "react";
import "./App.css";
import { SetListForm } from "../src/components/setListForm/setListForm";
import Metronome from "../src/components/Metronome/Metronome";
import SetList from "../src/components/setList/setList";
import logo from "./audio/setlists-logo.png";
export const App = () => {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo"></img>
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
};
