import React from "react";
import ExtraMeanings from "./ExtraMeanings";

export default function Meanings(props) {
  return (
    <div className="Meanings container">
      {props.meanings.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <ExtraMeanings topic="Example" extra={definition.example} />
              <br />
              <ExtraMeanings topic="Synonyms" extra={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
