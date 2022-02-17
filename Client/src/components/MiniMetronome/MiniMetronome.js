import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeBPM } from "../../features/MetronomeSlice";
import play from "./play.png";
import pause from "./pause.svg";
import plus from "./plus.png";
import minus from "./minus.png";
import "./MiniMetronome.css";

const MiniMetronome = () => {
  let bpm = useSelector((state) => state.MetronomeSlice.bpm);
  const [playClass, setPlayClass] = useState("w-8 invert-0 hover:invert");
  const [pauseClass, setPauseClass] = useState(
    "w-8 hidden mr-2 invert-0 hover:invert"
  );
  const [metronomeClass, setMetronomeClass] = useState(
    "flex w-9/12 max-w-sm items-center md:h-16 justify-center group shadow-lg mt-10 h-24 md:h-32 rounded-lg bg-primary p-3 mb-5"
  );
  const dispatch = useDispatch();
  let width = window.innerWidth;

  const addFive = () => {
    if (bpm === 400) {
      return;
    }
    const newBPM = bpm + 5;
    dispatch(changeBPM(newBPM));
    stopMetronome();
    startMetronome();
  };
  const subtractFive = () => {
    if (bpm === 40) {
      return;
    }
    const newBPM = bpm - 5;
    dispatch(changeBPM(newBPM));
    stopMetronome();
    startMetronome();
  };

  const startMetronome = () => {
    // milli is bpm converted to milliseconds
    //metronome.style.animationDuration = milliString + "ms";
    let milli = 60000 / bpm;
    let milliString = milli.toString();
    const metronome = document.getElementById("metronome");
    metronome.style.animation = `beat ${milliString}ms infinite`;
    setPlayClass("w-8 invert-0 hover:invert hidden");
    setPauseClass("w-8 invert-0 hover:invert");
  };
  const stopMetronome = () => {
    const metronome = document.getElementById("metronome");
    metronome.style.animation = null;
    setPlayClass("w-8 invert-0 hover:invert");
    setPauseClass("w-8 invert-0 hover:invert hidden");
  };

  return (
    <div id="metronome" className={metronomeClass}>
      <img
        alt="decrement-metronome"
        onClick={subtractFive}
        className="w-8 ml-0 mr-3 invert-0 hover:invert"
        src={minus}
      />
      <img
        alt="increment-metronome"
        onClick={addFive}
        className="w-6 mr-3 invert-0 hover:invert"
        src={plus}
      />
      <img
        alt="pause"
        onClick={stopMetronome}
        className={pauseClass}
        src={pause}
      />
      <img
        alt="play"
        onClick={startMetronome}
        className={playClass}
        src={play}
      />
      <div className="bg-purple mx-3 px-3 py-1 rounded-lg">
        <div className=" text-white text-2xl">
          {bpm}
          <span className="text-sm">BPM</span>
        </div>
      </div>
    </div>
  );
};

export default MiniMetronome;
