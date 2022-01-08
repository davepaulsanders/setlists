import React from "react";
import { useDispatch } from "react-redux";
import "./setListItems.css";
import { deleteSong } from "../../features/setListSlice";

function SetListItems({ title, bpm, id }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteSong({ id: id }));
  };

  return (
    <div className="songs-container">
      <p>{title}</p>
      <p>{bpm}</p>
      <button onClick={handleClick} className="delete-button">
        x
      </button>
    </div>
  );
}

export default SetListItems;
