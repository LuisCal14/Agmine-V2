import React from "react";
import "../assets/style/Quizziz.css";

const Cubitos = (props) => {
  return (
    <div className="cubitos">
      <p className="text">{props.title}</p>
    </div>
  );
};

export default Cubitos;

