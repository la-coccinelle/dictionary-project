import React from "react";
import "./Phonetics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function Phonetics(props) {
  let audioElement = new Audio(props.phonetic.audio);

  function handleClick() {
    audioElement.play();
  }
  return (
    <div className="Phonetics">
      <FontAwesomeIcon
        className="Audio-button fa-2xl"
        icon={faCirclePlay}
        onClick={handleClick}
      />
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
