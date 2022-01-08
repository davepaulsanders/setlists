import React from "react";
import "./App.css";
import { SetListForm } from "../src/components/setListForm/setListForm";
import SetList from "../src/components/setList/setList";
export const App = () => {
  return (
    <div className="App">
      <h1 className="page-title">Setlist</h1>
      <hr></hr>
      <SetList />
      <hr></hr>
      <SetListForm />
    </div>
  );
};
