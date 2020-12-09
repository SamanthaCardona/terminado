import React from "react";
import { link, withRouter } from "react-router-dom";
import "../css/perros.css";

const Perros = (props) => {
  const { history } = props;
  return (
    <div>
      <div className="container-pr">
      <center> <img className="Logo" src="img/logo.jpeg" alt="Logo" />  </center>
        <form action="/action_page.php" className="was-validated">
          <div className="form-group">
          <center> <h3>Registrar mascota: </h3>  </center>
          <center> <label for="uname">Nombre:</label> </center>
           <center> <input
              type="text"
              className="form-control"
              id="uname"
              placeholder="Ingresa nombre"
              name="uname"
              required
            /> </center>
            <div className="valid-feedback">Válido</div>
            <div className="invalid-feedback">
              Por favor rellene este campo.
            </div>
          </div>
          <div className="form-group">
          <center>  <label for="pwd">Edad:</label> </center> 
          <center> <input
              className="form-control"
              id="pwd"
              placeholder="Ingresar edad"
              name="pswd"
              required
            /> </center>
            <div className="valid-feedback">Válido</div>
            <div className="invalid-feedback">
              Por favor rellene este campo.
            </div>
          </div>
          <div className="form-group">
           <center> <label for="pwd">Raza:</label> </center>
           <center> <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Ingresa raza"
              name="pswd"
              required
            /> </center>
            <div className="valid-feedback">Válido</div>
            <div className="invalid-feedback">
              Por favor rellene este campo.
            </div>
          </div>
          <p>
          <center> <button
            type="submit"
            className="btn btn-primary"
            onClick={() => history.push("Perfiles")}
          >
            Registrar
          </button> </center>
          </p>
         <center> <button
            type="submit"
            className="btn btn-danger"
            onClick={() => history.goBack("/Registro")}
          >
            Devolverse
          </button> </center>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Perros);