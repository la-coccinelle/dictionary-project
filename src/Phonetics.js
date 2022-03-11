import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  let audioElement = new Audio(props.phonetic.audio);

  function handleClick() {
    audioElement.play();
  }
  return (
    <div className="Phonetics">
      <button className="Audio-button" onClick={handleClick}>
        Audio
      </button>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
