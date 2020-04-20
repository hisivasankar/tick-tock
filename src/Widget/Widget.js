import React from "react";

import { timeElapsed } from "../Utils/DateUtils";

import "./Widget.css";

const Widget = (props) => {
  let time = "";
  const today = Date.now();
  if (props.reverse) {
    time = timeElapsed(today, props.to);
  } else {
    time = timeElapsed(props.from, props.to);
  }

  const from = new Date(props.from);
  const to = new Date(props.to);

  return (
    <div className="Widget">
      <h2 className="title">{props.title}</h2>
      <h3>{time}</h3>
      {!props.reverse ? (
        <div>
          <p>From {from.toDateString()}</p>
          <p>Until {props.to ? to.toLocaleString() : "now!"}</p>
        </div>
      ) : (
        <div>
          <p>Until {props.to ? to.toLocaleString() : "now!"}</p>
        </div>
      )}
    </div>
  );
};

export default Widget;
