import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../css/inicio.css";

const Inicio = () => {
  return (
    <div>
      <main role="main">
        <div className="container-inicio bg">
          <body>
          <center> <video src="video/puppylove.mp4.mp4" controls width="400px" height="400px"></video> </center>
        </body>
          <p>
            En este video vamos a aprender más de nuestra aplicación y su uso.
          </p>
          <p>
            <center>
              {" "}
              <Link className="btn btn-primary" to="/Sesion" role="button">
                Iniciar sesión.
              </Link>{" "}
            </center>
          </p>
          <p>
            <center>
              {" "}
              <Link className="btn btn-secondary" to="/Registro" role="button">
                Registrarte.
              </Link>{" "}
            </center>
          </p>
        </div>
      </main>
    </div>
  );
};

export default withRouter(Inicio);
