import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./setListItems.css";
import { deleteSong } from "../../features/setListSlice";

function SetListItems() {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    dispatch(deleteSong({ id: event.id }));
  };
  const songs = useSelector((state) => state.setlist);

  return (
    <div>
      {songs.map((song) => (
        <div className="songs-container">
          <p>{song.title}</p>
          <p>{song.bpm}</p>
          <button onClick={handleClick} className="delete-button">
            x
          </button>
        </div>
      ))}
    </div>
  );
}

export default SetListItems;
