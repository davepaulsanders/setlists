import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SetListForm } from "../src/components/setListForm/setListForm";
import MiniMetronome from "../src/components/MiniMetronome/MiniMetronome";
import SetList from "../src/components/setList/setList";
import logo from "./audio/setlists-logo.png";
import { useNavigate } from "react-router-dom";

export const App = () => {
  let logIn = useSelector((state) => state.LogInSlice.logIn);

  const navigate = useNavigate();

  useEffect(() => {
    if (logIn === false) {
      navigate("/login");
    }
  });
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
};
