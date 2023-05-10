import React from "react";
import "../assets/style/Quizziz.css";
import Cubitos from "../components/Cubitos";

const Quizziz = () => {
  return (
    <>
      <main>
        <div className="in_main">
          <div class="m_square">
            <h3>Quieres un mono?</h3>
          </div>
          <div className="out_square">
            <Cubitos title="Comida" />
            <Cubitos title="No" />
            <Cubitos title="Si" />
            <Cubitos title="Comprendo" />
          </div>
        </div>
      </main>
    </>
  );
};


export default Quizziz;
