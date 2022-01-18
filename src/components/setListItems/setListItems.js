import React from "react";
import { useDispatch } from "react-redux";
import "./setListItems.css";
import { deleteSong } from "../../features/setListSlice";
import { changeBPM } from "../../features/MetronomeSlice";
function SetListItems({ title, bpm, id }) {
  const dispatch = useDispatch();
  const selectSong = (event) => {
    //add something that changes all the stuff inside the selected box

    bpm = Number(bpm);
    dispatch(changeBPM(bpm));
  };
  const handleClick = () => {
    dispatch(deleteSong({ id: id }));
  };

  return (
    <div className="setlist-container" onClick={selectSong}>
      <li className="songs-container" id="songs-container">
        <p className="song-details" id="title">
          {title}
        </p>
        <p id="bpm-label">{bpm} BPM</p>
      </li>
    </div>
  );
}

export default SetListItems;
