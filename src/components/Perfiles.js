import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../css/Perfiles.css";

const Perfiles = (props) => {
  const { history } = props;
  return (
    <div className="bg">
      <h1>Mis mascotas:</h1>
      <div className="Container">
        <div
          className="info-hobby"
          onClick={() => history.push("/perfilperro")}
        >
          <Link title="index" to="/">
            <img src="img/perro1.jpg" alt="index" />
          </Link>
          <h2>Toby</h2>
        </div>
        <div className="info-hobby">
          <a title="index" href="index.html">
            <img src="img/perro2.png" alt="index" />
          </a>
          <h2>Luna</h2>
        </div>

        <div className="Container">
          <div className="info-hobby">
            <a title="index" href="index.html">
              <img src="img/perro3.jpg" alt="index" />
            </a>
            <h2>Apolo</h2>
          </div>
          <div className="info-hobby">
            <a title="index" href="index.html">
              <img src="img/perro4.jpg" alt="index" />
            </a>
            <h2>Pachanga</h2>
          </div>

          <div className="info-hobby5">
            <button
              className="info-hobby5"
              onClick={() => history.push("/Perros")}
            >
              <img src="./img/mas.png" class="card-img-top" alt="..." />
            </button>
          </div>
        </div>

        <div className="Cs">
          <button
            type="submit"
            className="btn4 btn-primary"
            onClick={() => history.push("Sesion")}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Perfiles;
