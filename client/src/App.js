import logo from './logo.svg';
import React , {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Addtask from './Components/Addtask';
import Todolist from './Components/Todolist';

function App() {
  const [todolist,setTodolist] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/tasks').then((res => {
      setTodolist(res.data)
    })).catch(err => console.log(err))


  }, [])
  const addTask = newTask => {
    setTodolist([...todolist, newTask])
  }
  return (
    <div>
      <Addtask addTask = {addTask} />
      <Todolist todolist = {todolist}/>
    </div>
    
  );
}

export default App;
