import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="container">
        <h3 style={{ textTransform: "capitalize" }}>{props.results.word}</h3>
        <Meanings meanings={props.results.meanings} />
      </div>
    );
  } else {
    return <p>Please enter a word to search</p>;
  }
}
