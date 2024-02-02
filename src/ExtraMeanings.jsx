import React from "react";

export default function ExtraMeanings(props) {
  if (props.extra) {
    return (
      <div className={`container ${props.topic}`}>
        <p>
          {" "}
          <strong>{props.topic}: </strong>
          {props.extra}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
