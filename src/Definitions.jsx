import React from "react";

export default function Definitions(props) {
  return (
    <div className="Definition container">
      {props.definitions.map(function (def, index) {
        return (
          <div key={index}>
            <p>
              {def.definition}
              <br />
              <em>{def.example}</em>
              <br />
              <br />
            </p>
          </div>
        );
      })}
    </div>
  );
}
