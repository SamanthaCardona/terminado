import React from "react";
import { link, withRouter } from "react-router-dom";




const Registro = (props) => {
  const { history } = props;
  return (
    <div>
     <div className="container.bg">
      <center> <img className="Logo" src="img/logo.jpeg" alt="Logo" /> </center>
        <form action="/action_page.php" className="was-validated">
          <div className="form-group">
          <center> <h3>Registrate: </h3> </center>
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
           <center> <label for="pwd">Correo:</label> </center>
           <center><input
              className="form-control"
              id="pwd"
              placeholder="Ingresa correo"
              name="pswd"
              required
            /> </center>
            <div className="valid-feedback">Válido</div>
            <div className="invalid-feedback">
              Por favor rellene este campo.
            </div>
          </div>
          <div className="form-group">
          <center>  <label for="pwd">Contraseña:</label> </center>
          <center> <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Ingresa contraseña"
              name="pswd"
              required
            /> </center>
            <div className="valid-feedback">Válido</div>
            <div className="invalid-feedback">
              Por favor rellene este campo.
            </div>
          </div>
          <div className="form-group form-check">
          <center> <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
                required
              /> {" "}
              Recuérdame.
              <div className="valid-feedback">Guardado.</div>
              <div className="invalid-feedback"></div>
         </label>  </center>
          </div>
          <center> <button
            type="submit"
            className="btn btn-primary"
            onClick={() => history.push("/Perros")}
          >
            Registrarse
          </button>  </center>
          <p>
          <center> <button
            type="submit"
            className="btn btn-danger"
            onClick={() => history.goBack("/")}
          >
            Devolverse
          </button>  </center>
          </p>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Registro);
