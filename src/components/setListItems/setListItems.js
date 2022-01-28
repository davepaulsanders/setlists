import React from "react";
import { useDispatch } from "react-redux";
//import "./setListItems.css";
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
      <li
        className="songs-container flex justify-between rounded-md p-2 group hover:bg-primary"
        id="songs-container"
      >
        <p
          className="song-details overflow-hidden text-ellipsis w-60 whitespace-nowrap group-hover:text-white"
          id="title"
        >
          {title}
        </p>
        <p
          className="whitespace-nowrap mx-2 w-16 group-hover:text-white"
          id="bpm-label"
        >
          {bpm} BPM
        </p>
        <svg
          onClick={handleClick}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 group-hover:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </li>
    </div>
  );
}

export default SetListItems;
