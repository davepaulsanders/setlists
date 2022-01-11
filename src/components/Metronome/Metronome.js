import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeBPM } from "../../features/MetronomeSlice";
import "./Metronome.css";

function Metronome() {
  const bpm = useSelector((state) => state.metronome.bpm);
  const dispatch = useDispatch();
  // milli is bpm converted to milliseconds
  const milli = 60000 / bpm;
  //setting up interval, selectors, and variables for metronome
  let interval;
  let isRunning = false;
  const milliString = milli.toString();

  //function to make metronome flash
  const metronomeFlash = () => {
    const metronome = document.getElementById("metronome");
    const startStop = document.getElementById("startStop");
    metronome.style.animationName = "click";
    metronome.style.animationDuration = milliString + "ms";
    startStop.innerHTML = "Stop";
  };
  //function to start metronome
  const startMetronome = () => {
    if (!interval) {
      interval = setInterval(metronomeFlash, milli);
      isRunning = true;
    }
  };
  const stopMetronome = () => {
    const metronome = document.getElementById("metronome");
    const startStop = document.getElementById("startStop");
    metronome.style.animationName = "";
    metronome.style.animationDuration = "";
    startStop.innerHTML = "Start";
    clearInterval(interval);
    interval = null;
    isRunning = false;
  };

  const handleChange = (event) => {
    dispatch(changeBPM({ bpm: event.target.value }));
  };
  const handleClick = () => {
    if (isRunning === true) {
      stopMetronome();
    } else {
      startMetronome();
    }
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
      <button className="start-stop" id="startStop" onClick={handleClick}>
        Start
      </button>
      <span className="mute-sound"></span>
    </div>
  );
}

export default Metronome;
