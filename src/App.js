import React from "react";
import "./App.css";
import { SetListForm } from "../src/components/setListForm/setListForm";
import Metronome from "../src/components/Metronome/Metronome";
import SetList from "../src/components/setList/setList";
export const App = () => {
  return (
    <div className="App">
      <div className="background-circle"></div>
      <div className="background-circle2"></div>
      <div className="background-circle3"></div>
      <div className="background-circle4"></div>
      <div className="background-circle5"></div>
      <h1 className="page-title">Setlist Creator</h1>
      <hr></hr>
      <div className="setlist-actions">
        <SetList />
        <Metronome />
      </div>
      <hr></hr>
      <SetListForm />
    </div>
  );
};
