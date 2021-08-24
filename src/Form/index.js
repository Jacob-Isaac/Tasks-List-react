import React from "react";
import "./style.css";

const Form = () => (
  <form className="section__form">
    <input
      className="section__form--input"
      placeholder=" Co jest do zrobienia?"
    />
    <button className="section__form--button">Dodaj zadanie</button>
  </form>
);

export default Form;
