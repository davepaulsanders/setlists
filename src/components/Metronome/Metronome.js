import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeBPM, changeIsRunning } from "../../features/MetronomeSlice";
//import "./Metronome.css";

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
      timeout = setTimeout(metronomeFlash);
      dispatch(changeIsRunning(true));
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
    dispatch(changeIsRunning(false));
  };
  const addFive = () => {
    const newBPM = bpm + 5;
    dispatch(changeBPM(newBPM));
  };
  const subtractFive = () => {
    const newBPM = bpm - 5;
    dispatch(changeBPM(newBPM));
  };
  const handleChange = (event) => {
    let switchToNumber = Number(event.target.value);
    stopMetronome();
    dispatch(changeBPM(switchToNumber));
  };
  const handleClick = () => {
    if (isRunning === true) {
      stopMetronome();
    } else {
      startMetronome();
    }
  };
  return (
    <div
      className="metronome flex hidden lg:block  justify-center flex-col w-64 h-64 items-center bg-purple rounded-full mb-5 shadow-lg
      "
      id="metronome"
    >
      <p className="metronome-bpm-label">
        <span className="bpm text-white">{bpm}</span>
        <span className="bpm-label text-white">BPM</span>
      </p>
      <div className="metronome-bpm-control flex justify-center">
        <button
          className="decrement text-4xl bg-transparent border border-purple hover:border-white px-3 py-1 rounded-md text-white"
          onClick={subtractFive}
        >
          –
        </button>
        <input
          className="slider"
          name="bpm"
          type="range"
          step="1"
          min="40"
          max="400"
          value={bpm}
          onChange={handleChange}
        ></input>
        <button
          className="increment text-4xl bg-transparent border border-purple hover:border-white px-3 py-1 rounded-md text-white"
          onClick={addFive}
        >
          +
        </button>
      </div>
      <button
        className="start-stop bg-transparent border-purple hover:border-white my-0 px-3 py-1 w-16 rounded-md text-white border"
        id="startStop"
        onClick={handleClick}
      >
        Start
      </button>
      <span className="mute-sound"></span>
    </div>
  );
}

export default Metronome;
