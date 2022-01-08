import React from "react";
import "./setListForm.css";

export const SetListForm = () => {
  return (
    <div className="setlist-form-container">
      <input type="text" id="title" name="title"></input>
      <label htmlFor="title">Song Title</label>
      <input type="range" id="bpm" name="bpm" min="40" max="400"></input>
      <label htmlFor="bpm">BPM</label>
      <button>Add song</button>
    </div>
  );
};
