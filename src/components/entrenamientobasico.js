import React from "react";
import { withRouter } from "react-router-dom";
import "../css/entrenamiento.css";

const entrenamientobasico = (props) => {
  const { history } = props;
  return (
    <div className="container-ent">
      <div className="title-ent">
        <h1>Entrenamiento Básico </h1>
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
                <p className="txt-ent-title">RECONOCER SU NOMBRE.</p> Configure
                el entorno para que su perro tenga éxito comenzando a entrenar
                en un entorno tranquilo y silencioso, sin distracciones.
                Practique un mínimo de 10 veces al día, diga el nombre del perro
                (de 2 a 6 pies de distancia) y tan pronto como el perro lo mire,
                marque este comportamiento con un marcador como "sí" o un
                clicker y recompense con comida. o jugar mientras alaba mucho.
                No le pida al perro que se siente ni haga nada más antes de
                darle el premio, ya que la recompensa es por mirarlo cuando dice
                su nombre, no por cualquier otro comportamiento. Pronto notará
                que su perro comienza a ofrecer atención sin que se lo pida;
                Esté preparado para reforzar esto con una recompensa para
                alentar a su perro a que se comunique con usted regularmente.
              </p>
            </div>
          </div>

          <div class="carousel-item">
            <div className="contt">
              <p className="txt-ent">
                <p className="txt-ent-title">SENTARSE.</p>
                Paso uno: sostenga una pequeña golosina de entrenamiento en su
                mano (o entre sus dedos si está trabajando con un perro más
                pequeño). Paso dos: coloca la mano con la golosina muy cerca de
                la nariz de tu perro para que pueda oler que tienes algo
                delicioso. Paso tres: Mueva lentamente su mano desde la nariz de
                su perro hacia su frente. Lo más probable es que sigan la mano
                con la nariz, lo que hará que bajen la espalda al suelo. Paso
                cuatro: Una vez que su trasero toque el suelo, haz clic y dales
                el premio mientras están sentados. Paso cinco: ¡Repita! Paso
                seis: Con práctica, su perro se anticipará a lo que está
                pidiendo cuando comience a mover el señuelo. Cuando note que su
                perro se sienta más rápido y no necesita el señuelo completo, es
                hora de pasar a agregar la señal verbal y desvanecer el señuelo
                de la mano.
              </p>
            </div>
          </div>

          <div class="carousel-item">
            <div className="contt">
              <p className="txt-ent">
                <p className="txt-ent-title">DONDE HACER SUS NECESIDADES.</p>
                Paso 1: haga que su perro se siente. La primera regla, y la más
                importante, para enseñarle a tu perro a orinar en un lugar es
                que tienes que supervisar. ¡No puedes dejar que tu perro salga
                al patio trasero sin un administrador! Para cada ocasión para ir
                al baño, deberá llevar a su perro con correa al lugar designado
                para ir al baño. Esto le permitirá llevar a su perro al área
                correcta. Si su perro corre libre, no puede controlar dónde
                finalmente hace sus necesidades. Pase el rato en el "área del
                baño" hasta que su perro orine o defeque y puede recompensar a
                su perro por orinar con libertad. Si su perro orina en el lugar
                correcto, dele un premio y recompénselo dejándolo sin correa o
                saliendo a caminar. Es importante reservar la caminata divertida
                o el tiempo de juego para después de que su perro orine en su
                lugar.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <div className="contt">
              <p className="txt-ent">
                <p className="txt-ent-title">DORMIR EN SU LUGAR.</p>
                Elija una cama que le encantará a su perro. Si es un cachorro,
                es posible que desee una cama más pequeña, para que esté cómodo
                y cómodo. Si su perro se estira durante el sueño profundo, es
                posible que disfrute de una cama más grande. Elija un lugar
                perfecto para la cama de su cachorro y haga un gran problema con
                su perro al señalarlo. También puede colocar algunos juguetes
                favoritos cerca de la cama para que pueda masticar durante sus
                momentos de tranquilidad. Con una correa, lleve a su perro a su
                cama para presentarlo. Dé una orden como 'vete a la cama' y
                arroje una golosina en su nueva cama y cuanddo lo haga dele un
                premio. Con éstos sencillos pasos logrará muy pronto el
                propósito con su cachorro.
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
        <button className="btn btn-danger" onClick={() => history.push("insigniabasico")} >Finalizar</button>
      </div> 
    </div>
  );
};

export default withRouter(entrenamientobasico);
