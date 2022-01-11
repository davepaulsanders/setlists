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
    <div className="songs-container" onClick={selectSong}>
      <p>{title}</p>
      <p>{bpm}</p>
      <button onClick={handleClick} className="delete-button">
        x
      </button>
    </div>
  );
}

export default SetListItems;
