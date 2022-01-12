import React from "react";
import { useSelector } from "react-redux";
import SetListItems from "../setListItems/setListItems";
import "./setList.css";
function SetList() {
  const songs = useSelector((state) => state.setlist);
  return (
    <div className="setlist-container">
      <ul type="1">
        {songs.map((song) => (
          <SetListItems title={song.title} id={song.id} bpm={song.bpm} />
        ))}
      </ul>
    </div>
  );
}
export default SetList;
