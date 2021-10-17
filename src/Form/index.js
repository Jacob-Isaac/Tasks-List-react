import { useState } from "react";
import "./style.css";

const Form = (props) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.addNewTask(newTaskContent.trim());
    setNewTaskContent("");
    //setNewTaskContent.focus();  // USTAWIC FOCUS
  };


  return (
    <form className="section__form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        className="section__form--input"
        placeholder=" Co jest do zrobienia?"
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <button className="section__form--button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
