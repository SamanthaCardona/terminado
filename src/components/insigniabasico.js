import { render } from "@testing-library/react";
import React from "react";
// import { link, withRouter } from "react-router-dom";
import "../css/insigniabasico.css";

const insigniabasico = (props) => {
  const { history } = props;
  return (
    <div className="container-pp">
      <center>
        <h1> Toby </h1>
      </center>
      <div className="info-hobby2">
        <a title="index" href="index.html" to="/">
          <img className="img-perro" src="img/perro1.jpg" alt="index" />
        </a>
      </div>

      <center>
        <h1> Logros </h1>
      </center>

      <div className="cont-logros">
        <div className="card border mb-3" Perfiles="max-width: 18rem;">
          <div className="card-body text-success">
            <center>
            <img className="img-trofeo" src="img/trofeo.jpg" alt="index" />
              <h5 className="card-title">Básico</h5>
            </center>
            <p className="card-text"></p>
          </div>
        </div>

        <div className="card border mb-3" Perfiles="max-width: 18rem;">
          <div className="card-body text-success">
            <center>
              <h5 className="card-title">Avanzado</h5>
            </center>
            <p className="card-text"></p>
          </div>
        </div>
      </div>

<div class="pp" >
        <button
          type="submit"
          className="btn-sig btn-danger"
          onClick={() => history.push("/Comenzar")}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default insigniabasico;
