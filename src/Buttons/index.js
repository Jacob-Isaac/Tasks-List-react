import React from "react";
import "./style.css";

const Buttons = (props) => {
  if (props.tasks.length === 0) {
    return null;
  }
  return (
    <div className="section__buttons">
      <button
        className={`section__button ${
          props.tasks.length === 0 ? " section__button--hidden" : ""
        } ${props.tasks.every(({ done }) => !done) ? "disabled" : ""}`}
      >
        {props.hideShowTasks ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className={`section__button ${
          props.tasks.length === 0 ? " section__button--hidden" : ""
        }`}
        disabled={props.tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
        {/* ZEPSUTE, NIE MA BYĆ KLASA DISABLED TYLKO ATRYBUT 31 MINUTA  */}
      </button>
    </div>
  );
};

export default Buttons;
