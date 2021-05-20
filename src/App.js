import React, { Component } from "react";
import WidgetContainer from "./WidgetContainer/WidgetContainer";

import "./App.css";

const widgetData = [
  {
    title: "Age",
    from: "1993/07/25",
  },
  {
    title: "Intermittent Fasting",
    from: "2018/12/24",
    to: "2019/01/11 9:45",
  },
  {
    title: "Braces",
    from: "2018/12/23",
  },
  {
    title: "Judgement Day",
    to: "2020/06/10 9:00",
    reverse: true,
  },
  {
    title: "Vegetarian Diet Experiment",
    from: "2020/4/01",
    to: "2021/5/01",
  },{
    title: "Covishield 1st Dose Vaccination",
    from: "2021/05/20 2:40 PM"
  },
  {
    title: "Parents Vaccination - 1st Dose",
    from: "2021/04/14 3:00 PM"
  },
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
