import React from 'react';
import perfil from './imagenes/perfil.jpg';
export const Intro = () => {
  return (
      <>
      <div className="intro">
      <img className="imagen-circular" src={perfil} alt="foto de perfil" />
      <div className="texto1">
        Bienvenidas a mi portfolio
      </div>
      <div className="texto2">
        Me llamo Elena Jiménez, soy ingeniera en telecomunicaciones, jugadora
        profesional de rugby y coordinadora de ocio y tiempo libre.
        <br />
        Acompañamé en mi página y conocemé un poco mejor.
      </div>
      <div>
        <a id="link1" className="link1" href="#contacto">Contáctame!</a>
      </div>
    </div>
      </>
  );
};

export default Intro;