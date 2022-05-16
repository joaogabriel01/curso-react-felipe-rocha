import React, { useState } from 'react';
import "./App.css";
import AddTask from './components/AddTask';
import Tasks from "./components/Tasks";

const App = () => {
// let message = 'Hello world!'
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true
    },
  ]);

  return (
    <>
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks}/>
      </div>
    </>
  );
};

export default App;