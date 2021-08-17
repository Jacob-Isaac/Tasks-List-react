import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import "./index.css";
import "./container.css";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: true },
  { id: 2, content: "zjeść kolacje", done: false },
];

const hideShowTasks = false;

function App() {
  return (
    <main className="container">
      <h1 className="container__header">Lista zadań</h1>

      <Section
        className="section__border"
        title="Dodaj nowe zadanie"
        taskContent={<Form />}
      />
      <Section
        className="section__border section__flex"
        title="Lista zadań"
        extraHeaderContent={
          <Buttons tasks={tasks} hideShowTasks={hideShowTasks} />
        }
        taskContent={<Tasks tasks={tasks} hideShowTasks={hideShowTasks} />}
      />
    </main>
  );
}

export default App;
