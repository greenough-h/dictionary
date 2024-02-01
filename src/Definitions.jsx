import React from "react";

export default function Definitions(props) {
  return (
    <div className="Definitions">
      {props.definitions.map(function (def, index) {
        return (
          <div>
            <p>
              {def.definition}
              <br />
              <em>{def.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
