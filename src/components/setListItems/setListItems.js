import React from "react";
import { useDispatch } from "react-redux";
import "./setListItems.css";
import { deleteSong } from "../../features/setListSlice";
import { changeBPM } from "../../features/MetronomeSlice";
function SetListItems({ title, bpm, id }) {
  const dispatch = useDispatch();
  const selectSong = (event) => {
    dispatch(changeBPM(bpm));
  };
  const handleClick = () => {
    dispatch(deleteSong({ id: id }));
  };

  return (
    <li className="setlist-container">
      <div className="songs-container" onClick={selectSong}>
        <p className="song-details">{title}</p>
        <p>{bpm} BPM</p>
        <button onClick={handleClick} className="delete-button">
          X
        </button>
      </div>
    </li>
  );
}

export default SetListItems;
