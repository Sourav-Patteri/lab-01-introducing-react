import React from "react";
import "./index.css";

const Greeting = ({name}) => {
  return (
    <h1>
      What's up{name && name.length > 0 ? " " + name : ""}? Hope you are doing good.
    </h1>
  );
};

export default Greeting;
