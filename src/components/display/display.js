import React, { Component } from "react";
import displayCSS from "./display.module.css";
import NumberBox from "../number-box/numberBox";


class Display extends Component {
  render() {

    const numb = [];
    const n = 100;
    for (let i = 1; i <= n; i++) {
      if (i % 7 === 0 || i % 11 === 0) {
        numb.push(
          <NumberBox key={i} number="buzz" cssStyle={displayCSS.BuzzHover} />
        );
      } else if ( parseInt(i.toString().split("").pop()) === 7) {
        numb.push(<NumberBox key={i} number="buzz" cssStyle={displayCSS.BuzzHover} />
        );
      } else {
        numb.push(<NumberBox key={i} number={i} />);
      }
    }

    return <div className={displayCSS.Grid}> {numb} </div>;
  }
}

export default Display;
