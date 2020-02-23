import React from "react";
import NumberBoxCSS from "./numberBox.module.css";

const NumberBox = props => {
  return (
    <article className={`${NumberBoxCSS.numberBox} ${props.cssStyle}`}>
      <p> {props.number} </p>
    </article>
  );
};

export default NumberBox;
