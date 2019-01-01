import React from "react";

import { timeElapsed } from "../Utils/DateUtils";

import "./Widget.css";

const Widget = props => {
  const time = timeElapsed(props.from);
  return (
    <div className="Widget">
      <h1 className="title">{props.title}</h1>
      <h2>{time}</h2>
    </div>
  );
};

export default Widget;
