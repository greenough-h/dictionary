import React from "react";
import Definitions from "./Definitions";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="container">
        <p>{props.results.word}</p>
        <Definitions definitions={props.results.meanings} />
      </div>
    );
  } else {
    return <p>"Please enter a word to search"</p>;
  }
}
