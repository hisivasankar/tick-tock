import React from "react";
import Widget from "../Widget/Widget";
import "./WidgetContainer.css";
const WidgetContainer = (props) => {
  const widgetData = props.data;
  const widgets = widgetData.map((widget) => (
    <Widget
      key={widget.title}
      title={widget.title}
      from={widget.from}
      to={widget.to}
      reverse={widget.reverse}
    />
  ));
  return <div className="Widgets">{widgets}</div>;
};

export default WidgetContainer;
