import React from "react";
import "./App.css";
import { SetListForm } from "../src/components/setListForm/setListForm";
import Metronome from "../src/components/Metronome/Metronome";
import SetList from "../src/components/setList/setList";
export const App = () => {
  return (
    <div className="App">
      <div className="background-circle circ"></div>
      <div className="background-circle2 circ"></div>
      <div className="background-circle3 circ"></div>
      <div className="background-circle4 circ"></div>
      <div className="background-circle5 circ"></div>
      <div className="background-circle6 circ"></div>
      <div className="background-circle7 circ"></div>
      <div className="background-circle8 circ"></div>
      <h1 className="page-title">Setlist Creator</h1>
      <hr></hr>
      <div className="setlist-actions">
        <div className="setlist-container">
          <SetList />
        </div>
        <Metronome />
      </div>
      <hr></hr>
      <SetListForm />
    </div>
  );
};
