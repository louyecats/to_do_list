import './App.css';
import React, {useState} from 'react'
import Form from './components/Form';
import DisplayAll from './components/DisplayAll';

function App() {
  //since we don't have database, temporariy store data submitted in an empty array and pass in as props
  const [allTasks, setAllTasks] = useState([]);

  return (
    <div className="App mt-5">
      <h1>To Do List</h1>
      <Form allTasks={allTasks} setAllTasks={setAllTasks}/>
      <DisplayAll allTasks={allTasks} setAllTasks={setAllTasks}/>
    </div>
  );
}

export default App;
