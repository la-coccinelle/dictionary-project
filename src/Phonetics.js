import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props);
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        Listen
      </a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
