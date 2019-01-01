import React, { Component } from "react";
import WidgetContainer from "./WidgetContainer/WidgetContainer";

import "./App.css";

const widgetData = [
  {
    title: "Age",
    from: "1993/07/25"
  },
  {
    title: "Intermittent Fasting",
    from: "2018/12/24"
  },
  {
    title: "Braces",
    from: "2018/12/23"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Tick Tock - Time Tracker</h1>
        </header>
        <main>
          <WidgetContainer data={widgetData} />
        </main>
      </div>
    );
  }
}

export default App;
