import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeBPM } from "../../features/MetronomeSlice";
import "./Metronome.css";

function Metronome() {
  const bpm = useSelector((state) => state.metronome.bpm);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeBPM({ bpm: event.target.value }));
  };
  const handleClick = () => {
    const metronome = document.getElementById("metronome");
    metronome.style.border = "1px solid red";
  };
  return (
    <div className="metronome" id="metronome">
      <p>{`${bpm} BPM`}</p>
      <div className="metronome-bpm-control">
        <button>-</button>
        <input
          name="bpm"
          type="range"
          step="1"
          min="40"
          max="400"
          value={bpm}
          onChange={handleChange}
        ></input>
        <button>+</button>
      </div>
      <button className="start-stop" onClick={handleClick}>
        Start
      </button>
      <span className="mute-sound"></span>
    </div>
  );
}

export default Metronome;
