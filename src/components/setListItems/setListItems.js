import React from "react";
import { useSelector } from "react-redux";
import "./setListItems.css";

function SetListItems() {
  const songs = useSelector((state) => state.setlist);
  console.log(songs);
  return (
    <div>
      {songs.map((song) => (
        <div>
          <p>{song.title}</p>
          <p>{song.bpm}</p>
        </div>
      ))}
    </div>
  );
}

export default SetListItems;
