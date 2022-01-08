import React from "react";
import { useSelector } from "react-redux";
import SetListItems from "../setListItems/setListItems";
function SetList() {
  const songs = useSelector((state) => state.setlist);
  return (
    <ul>
      {songs.map((song) => (
        <SetListItems title={song.title} id={song.id} bpm={song.bpm} />
      ))}
    </ul>
  );
}
export default SetList;
