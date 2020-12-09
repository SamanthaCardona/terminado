import React from "react";
import { withRouter } from "react-router-dom";
import "../css/entrenamiento.css";

const entrenamientobasico = (props) => {
  const { history } = props;
  return (
    <div className="container-ent">
      <div className="title-ent">
        <h1>Entrenamiento Avanzado </h1>
      </div>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="contt">
              <p className="txt-ent">
                <p className="txt-ent-title">ANDAR SIN CORREA.</p>
                Si quieres que tu perro camine a tu lado, debes decidir de qué
                lado estará antes de empezar y ceñirte a él. Use una correa de
                longitud estándar, Esto le dará más control. Simplemente no
                dejes que tu cachorro te arrastre y dale un poco de espacio para
                maniobrar. Usando una de sus golosinas favoritas, llame a su
                cachorro a su lado usando el premio como señuelo. Cuando se
                mueva a su posición, asegúrese de elogiarlo y darle un premio.
                Con un suministro saludable de golosinas, siga practicando esto,
                agregando su elección de comando. Puede utilizar "lateral" o
                simplemente "walkies". Con el tiempo, se convertirá en una
                segunda naturaleza para él ponerse de lado cada vez que le
                pongas la correa. Y listo,ha llegado el momento de salir a dar
                el primer paseo. Agarra la correa, da tu orden y tu cachorro
                debería dar un paso al frente. Conéctalo y sal a caminar. Si se
                porta bien durante la caminata, felicítelo y dele un par de
                golosinas.
              </p>
            </div>
          </div>

          <div class="carousel-item">
            <div className="contt">
              <p className="txt-ent">
                <p className="txt-ent-title">TRAER OBJETOS.</p>
                Comience con un objeto divertido cuyo nombre ya le sea familiar
                a su perro. Colóquelo en un área despejada junto a otros dos
                objetos no atractivos, como un martillo y un cepillo para el
                cabello. Señale los objetos y dígale a su perro que "busque
                (nombre del objeto)". Felicítelo en el momento en que agarre el
                objeto correcto. Cuando le traiga el objeto, recompénselo con
                una golosina en lugar de jugar con el juguete. Agregue un
                segundo objeto al conjunto, uno cuyo nombre sea conocido por su
                perro. Alternativamente, pídale a su perro que encuentre cada
                uno de los dos objetos familiares. Si elige incorrectamente, no
                lo regañe; en cambio, no lo reconozca de una forma u otra. Sigue
                diciéndole que "busque (nombre del objeto)". Asi lograrás
                facilmente lograr el objetivo con tu cachorro.
              </p>
            </div>
          </div>

          <div class="carousel-item">
            <div className="contt">
              <p className="txt-ent">
                <p className="txt-ent-title">BUSQUEDA DE UN OBJETO.</p>
                Haga que su perro se siente. Luego sostenga un objeto con el que
                esté familiarizado (conoce su nombre) y déjelo olerlo. Después
                coloque el objeto debajo de algo obvio (como una toalla) y diga
                "encuéntrelo". Puede agregar el nombre del objeto si no lo hace
                rápidamente (conejito "encuéntrelo"). Haga clic y trate cuando
                toque el objeto, repita varias veces, pero cada vez que repita,
                mueva el objeto a una ubicación diferente, haciéndose
                progresivamente más difícil. Haga clic y trate cada vez,
                finalizando, Déjelo oler y luego esconda otros objetos con los
                que no esté familiarizado y dé el comando "Encuéntrelo".
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <div className="contt">
              <p className="txt-ent">
                <p className="txt-ent-title">DE PIE.</p>
                Pídale a su perro que se siente frente a usted, aproximadamente
                a un pie de distancia. Sostenga una golosina paralela a su
                nariz, a unos centímetros de distancia, y mueva lentamente la
                golosina hacia usted. Mientras su perro se pone de pie para
                alcanzar la golosina, felicítelo y dele rápidamente la golosina
                como recompensa. Cuando empiece a pararse constantemente, no
                sostenga más la golosina, solo use la señal con la mano y luego
                recompense con una golosina de su bolsillo. Una vez que esté de
                pie rápidamente con la señal con la mano, agregue la señal
                verbal: "Ponte de pie". Una vez que esté de pie en la señal
                verbal, puede comenzar a enseñarle un "stand-stay" para que
                aprenda a sostenerse.
              </p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div className="btn-cont">
        <button className="btn btn-danger" onClick={() => history.push("insigniabasico")}>Finalizar</button>
      </div>
    </div>
  );
};

export default withRouter(entrenamientobasico);
