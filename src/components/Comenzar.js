import React from "react";
import { link, withRouter } from "react-router-dom";
import "../css/comenzar.css";

const Comenzar = (props) => {
  const { history } = props;
  return (
    <div className="container-comenzar bg">
      <div className="title">
        <h1>¿Comenzamos?</h1>
      </div>
      <div className="buttons-comenzar">
        <button
          className="btnn"
          onClick={() => history.push("entrenamientobasico")}
        >
          Entrenamiento básico
        </button>

        <button
          className="btnn"
          onClick={() => history.push("entrenamientoavanzado")}
        >
          Entrenamiento avanzado
        </button>
      </div>
    </div>
  );
};

export default withRouter(Comenzar);
