import React from "react";
import "./style.css";

const Tasks = (props) => (
  <ul className="section__list">
    {props.tasks.map((task) => (
      <li
        key={task.id}
        className={`section__list--item${
          task.done && props.hideOrShow ? " section__list--hidden" : ""
        }`}
      >
        <button className="button button__remove">🗑</button>
        <button className="button button__done">{task.done ? "✔" : ""}</button>
        <span
          className={`content
      ${task.done ? "content--decoration" : ""}`}
        >
          {task.content}
        </span>
      </li>
    ))}
  </ul>
);

export default Tasks;
