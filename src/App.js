import React from "react";
import "./App.css";
import { SetListForm } from "../src/components/setListForm/setListForm";
import SetListItems from "../src/components/setListItems/setListItems";
export const App = () => {
  return (
    <div className="App">
      <h1 className="page-title">Setlist</h1>
      <hr></hr>
      <SetListItems />
      <hr></hr>
      <SetListForm />
    </div>
  );
};
