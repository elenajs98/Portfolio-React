import React from 'react';
import frontend from './imagenes/frontend.png';
import rugby from './imagenes/rugby.JPG';
import siem from './imagenes/siem.JPG';
import deportes from './htmls/deportes.html';

export const Mosaico = () => {
  return (
      <>
        <div className="album py-5 bg-light" id="album">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <img
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                src={rugby}
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                </img>
              <div className="card-body">
                  <h3>Deportes</h3>
                  <p>
                    Los deportes han sido mi pasión desde muy pequeña. En este apartado
                    haremos un pequeño recorrido por mi carrera deportiva
                  </p>
                  <a className="ver-mas" href={deportes}>Ver todo</a>
              </div>
            </div>

          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
              
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                src={siem}
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
            </img>

              <div className="card-body">
                  <h3>Siem Clothing</h3>
                  <p>
                    Este es mi gran proyecto personal, aun está en producción, pero
                    pronto podré enseñaros muchas cosas...
                  </p>
                  <a className="proximamente" href="./htmls/siemclothing.html">Próximamente...</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                src={frontend}
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
            </img>
              <div className="card-body">
                  <h3>
                      Soporte de tecnoligías de la información de google + desarrollador
                      web Frontend
                    </h3>
                    <p>
                      Actualmente estoy realizando este curso, y aquí voy a compartir con
                      vosotros los proyectos que realizamos a lo largo del curso...
                    </p>
                    <a className="ver-mas" href="./htmls/frontend.html">Ver todo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </>
  );
};
export default Mosaico;
