import { React, useState } from "react";
import "./Metronome.css";
function Metronome() {
  const [bpm, changeBPM] = useState(220);

  const handleChange = (event) => {
    changeBPM(event.target.value);
  };
  return (
    <div className="metronome">
      <p>{`${bpm} BPM`}</p>
      <div className="metronome-bpm-control">
        <button>-</button>
        <input
          name="bpm"
          type="range"
          step="1"
          min="40"
          max="400"
          defaultValue="220"
          onChange={handleChange}
        ></input>
        <button>+</button>
      </div>

      <button className="start-stop">Start</button>
      <span className="mute-sound"></span>
    </div>
  );
}

export default Metronome;
