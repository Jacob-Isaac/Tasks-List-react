import React from "react";
import "./style.css";

const Buttons = (props) => {
  if (props.tasks.length === 0) {
    return null;
  }
  return (
    <div className="section__buttons">
      <button
        onClick={props.toggleHideOrShow}
        className={`section__button ${
          props.tasks.length === 0 ? " section__button--hidden" : ""
        } ${props.tasks.every(({ done }) => !done) ? "disabled" : ""}`}
      >
        {props.hideOrShow ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className={`section__button ${
          props.tasks.length === 0 ? " section__button--hidden" : ""
        }`}
        disabled={props.tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );
};

export default Buttons;
