import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import {hello, name} from "./utils/hello";
import "./index.css";
import "./container.css";

hello();
console.log(name);

const tasks = [
  { id: 1, content: "przejść na Reacta", done: true },
  { id: 2, content: "zjeść kolacje", done: false },
];

const HideOrShow = false;

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
          <Buttons tasks={tasks} HideOrShow={HideOrShow} />
        }
        taskContent={<Tasks tasks={tasks} HideOrShow={HideOrShow} />}
      />
    </main>
  );
}

export default App;
