import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="container">
          <h3>{props.results.word}</h3>
          {/* style={{ textTransform: "capitalize" }} */}
          <div>
            <p>{props.results.phonetic}</p>
          </div>
        </div>
        <Meanings meanings={props.results.meanings} />
      </div>
    );
  } else {
    return <p>Please enter a word to search</p>;
  }
}
