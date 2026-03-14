import { useEffect, useState } from "react";
import "./Stopwatch.scss"

const PRESETS = [5, 10, 20];

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [activePreset, setActivePreset] = useState(20);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handlePreset = (mins) => {
    setActivePreset(mins);
    setRunning(false);
    setTime(0);
  };

  const handleReset = () => {
    setRunning(false);
    setTime(0);
  };

  const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);

  return (
    <div className="timer-page">
      {/* Preset Buttons */}
      <div className="timer-page__presets">
        {PRESETS.map((mins) => (
          <button
            key={mins}
            className={`timer-page__preset-btn ${activePreset === mins ? "timer-page__preset-btn--active" : ""}`}
            onClick={() => handlePreset(mins)}
          >
            {mins} mins
          </button>
        ))}
      </div>

      {/* Main Card */}
      <div className="timer-card">
        {/* Left Section */}
        <div className="timer-card__left">
          <span className="timer-card__label">Timer</span>
          <div className="timer-card__display">
            {minutes}:{seconds}
          </div>
          <button
            className={`timer-card__action-btn ${running ? "timer-card__action-btn--stop" : "timer-card__action-btn--start"}`}
            onClick={() => setRunning((prev) => !prev)}
          >
            {running ? "Stop" : "Start"}
          </button>
          <button 
          className="timer-card__action-btn"
          onClick={handleReset}>Reset</button>
        </div>

        {/* Right Section — Pause/Play Panel */}
        <div className="timer-card__right">
          <div
            className="timer-card__control-panel"
            onClick={() => setRunning((prev) => !prev)}
          >
            {running ? (
              /* Pause icon */
              <div className="timer-card__pause-icon">
                <span />
                <span />
              </div>
            ) : (
              /* Play icon */
              <div className="timer-card__play-icon" />
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="timer-page__bottom-bar" />
    </div>
  );
};

export default Stopwatch;
