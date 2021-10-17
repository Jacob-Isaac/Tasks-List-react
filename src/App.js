import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import "./index.css";
import "./container.css";


function App() {
  const [hideOrShow, setHideOrShow] = useState(false);
 const [tasks, setTasks] = useState([
  { id: 1, content: "przejść na Reacta", done: true },
  { id: 2, content: "zjeść kolacje", done: false },
]);
  const toggleHideOrShow = () => {
    setHideOrShow((hideOrShow) => !hideOrShow);
  };
  const removeTasks = (id) => {
    setTasks(tasks => tasks.filter(task=>task.id !==id));
  };
  
  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task=> {
        if (task.id === id) {
          return {...task, done: !task.done};
        }
        else {
        return task;
        }
        }));
  }

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({...task, done:true,})));
  };

  const addNewTask = (newContent) => {
    setTasks(tasks => [
      ...tasks,
      {
        content: newContent,
        done:false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length-1].id + 1,
      },

    ]);
  }

  return (
    <main className="container">
      <h1 className="container__header">Lista zadań</h1>

      <Section
        className="section__border"
        title="Dodaj nowe zadanie"
        taskContent={<Form addNewTask={addNewTask}/>}
      />
      <Section
        className="section__border section__flex"
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideOrShow={hideOrShow}
            toggleHideOrShow={toggleHideOrShow}
            setAllDone={setAllDone}
          />
        }
        taskContent={<Tasks 
          tasks={tasks} 
          hideOrShow={hideOrShow} 
          removeTasks={removeTasks}
          toggleTaskDone={toggleTaskDone}/>}
      />
    </main>
  );
}

export default App;
