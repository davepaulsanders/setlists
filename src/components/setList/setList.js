import React from "react";
import { useSelector } from "react-redux";
import SetListItems from "../setListItems/setListItems";
import "./setList.css";
function SetList() {
  const songs = useSelector((state) => state.setlist);
  return (
    <div className="setlist">
      <ul type="1">
        {songs.map((song) => (
          <SetListItems
            key={song.key}
            title={song.title}
            id={song.id}
            bpm={song.bpm}
          />
        ))}
      </ul>
    </div>
  );
}
export default SetList;
