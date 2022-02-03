import React from 'react';

export const Contacto = () => {
  return (
      <>
      <div id="contacto" className="formulario">
        <div className="texto">
          <p className="par1">¿Quieres ponerte en contacto conmigo?</p>
          <p className="par2">Deja aquí los detalles</p>
        </div>
        <form>
          <label for="name" >
            Nombre
          </label>
          <br />
          <input
            placeholder="Escribe aquí tu nombre"
            type="text"
            className="text-imput"
            maxLength="256"
            name="name"
            data-name="Name"
            id="name"
          />
          <br />
          <br />
          <br />
          <label for="email" >Direccion de e-mail</label>
          <br />
          <input
            placeholder="Escribe aquí tu e-mail"
            type="email"
            className="text-imput"
            maxLength="256"
            name="email"
            data-name="Email"
            id="email"
            required=""
          />
          <br />
          <br />
          <br />
          <label for="email-2">Detalles</label>
          <br />
          <textarea
            placeholder="Escribe aquí tu mensaje"
            name="field"
            maxLength="5000"
            id="field"
            className="textarea w-input"
          ></textarea>
          <b />
          <br />
          <input
            type="submit"
            value="Enviar"
            data-wait="Please wait..."
            className="button"
          />
        </form>
      </div>
      </>
  );
};
export default Contacto;