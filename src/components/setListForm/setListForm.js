import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./setListForm.css";
import { addSong } from "../../features/setListSlice";

// importing song list from JSON server

const fetchSongs = async () => {
  try {
    const response = await fetch(
      "https://api.jsonbin.io/b/61e03c010f639830851b73e1"
    );
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error("Request Failed!");
  } catch (error) {
    console.log(error);
  }
};
const songs = require("../../songdata/jazz-standards.json");

export const SetListForm = () => {
  const [value, setValue] = useState([]);
  const [bpm, setBPM] = useState([]);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (bpm < 40 || bpm > 400) {
      window.alert("That tempo is too extreme!");
      return;
    }
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
        <div className="song-submit">
          <input
            list="song-titles"
            className="form-elements"
            placeholder="Type in a song to add!"
            type="text"
            id="title"
            name="title"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          ></input>
          <datalist id="song-titles">
            {songs.map((song) => (
              <option year={song.Year}>{song.Standard}</option>
            ))}
          </datalist>
          <label className="form-elements" htmlFor="title"></label>
        </div>
        <div className="bpm-submit">
          <input
            className="form-elements"
            placeholder="Choose a BPM"
            id="bpm"
            name="bpm"
            min="40"
            max="400"
            step="1"
            bpm={value}
            onChange={(event) => setBPM(event.target.value)}
          ></input>
          <label className="form-elements" htmlFor="bpm"></label>
          <button className="form-elements add-button">Add song</button>
        </div>
      </form>
    </div>
  );
};
