import React from "react";
import ExtraMeanings from "./ExtraMeanings";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      {props.meanings.map(function (definition, index) {
        return (
          <div key={index} className="container">
            <p>
              <strong>Definition: </strong>
              {definition.definition}
              <ExtraMeanings topic="Example" extra={definition.example} />
              <ExtraMeanings topic="Synonyms" extra={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
