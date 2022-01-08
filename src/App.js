import React from "react";
import "./App.css";
import { SetListForm } from "../src/components/setListForm/setListForm";
import SetListItems from "../src/components/setListItems/setListItems";
export const App = () => {
  return (
    <div className="App">
      <h1>Setlist</h1>
      <SetListItems />
      <SetListForm />
    </div>
  );
};
