import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeBPM } from "../../features/MetronomeSlice";
import "./Metronome.css";

function Metronome() {
  let bpm = useSelector((state) => state.MetronomeSlice.bpm);

  let isRunning = useSelector((state) => state.MetronomeSlice.isRunning);

  const dispatch = useDispatch();
  // milli is bpm converted to milliseconds
  const milli = 60000 / bpm;
  //setting up timeout, selectors, and variables for metronome
  let timeout;

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
    console.log(timeout);
    if (!timeout & (isRunning === false)) {
      timeout = setTimeout(metronomeFlash, milli);
      isRunning = true;
    }
  };
  const stopMetronome = () => {
    const metronome = document.getElementById("metronome");
    const startStop = document.getElementById("startStop");
    metronome.style.animationName = null;
    metronome.style.animationDuration = null;
    startStop.innerHTML = "Start";
    clearTimeout(timeout);
    timeout = null;
    isRunning = false;
  };
  const addOne = () => {
    const newBPM = bpm + 1;
    dispatch(changeBPM(newBPM));
  };
  const subtractOne = () => {
    const newBPM = bpm - 1;
    dispatch(changeBPM(newBPM));
  };
  const handleChange = (event) => {
    let switchToNumber = Number(event.target.value);
    stopMetronome();
    dispatch(changeBPM(switchToNumber));
    startMetronome();
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
        <button onClick={subtractOne}>-</button>
        <input
          name="bpm"
          type="range"
          step="1"
          min="40"
          max="400"
          value={bpm}
          onChange={handleChange}
        ></input>
        <button onClick={addOne}>+</button>
      </div>
      <button className="start-stop" id="startStop" onClick={handleClick}>
        Start
      </button>
      <span className="mute-sound"></span>
    </div>
  );
}

export default Metronome;
