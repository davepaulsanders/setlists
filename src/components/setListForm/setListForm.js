import { React, useState } from "react";
import { useDispatch } from "react-redux";
import "./setListForm.css";
import { addSong } from "../../features/setListSlice";

export const SetListForm = () => {
  const [value, setValue] = useState([]);
  const [bpm, setBPM] = useState([]);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addSong({
        title: value,
        bpm: bpm,
      })
    );
  };
  return (
    <div className="setlist-form-container">
      <form onSubmit={onSubmit}>
        <input
          className="form-elements"
          placeholder="Type in a song!"
          type="text"
          id="title"
          name="title"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></input>
        <label className="form-elements" htmlFor="title">
          Song Title
        </label>
        <input
          className="form-elements"
          placeholder="40"
          id="bpm"
          name="bpm"
          min="40"
          max="400"
          bpm={value}
          onChange={(event) => setBPM(event.target.value)}
        ></input>
        <label className="form-elements" htmlFor="bpm">
          BPM
        </label>
        <button className="form-elements">Add song</button>
      </form>
    </div>
  );
};
