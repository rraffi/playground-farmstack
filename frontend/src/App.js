import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import TodoView from './components/TodoListView';

function App() {

  const [todoList, setToDoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  // Read all toods
  useEffect(() => {
    axios.get(`http://localhost:8000/api/todo/`)
    .then(res => {
      setToDoList(res.data)
    })
  });

  // Post a todo
  const addToDoHandler = () => {
    axios.post('http://localhost:8000/api/todo', { 'title':title,
    'description': desc })
    .then(res => console.log)
  }


  return (
      <div className="App list-group-item justify-content-left
      align-items-center mx-auto" style={{"width":"400px",
      "backgroundColor":"white", "marginTop":"15px"}}>
        <h1 className="card text-white bg-primary mb-1"
        styleName="max-width: 20rem;">Task Manager</h1>
        <h6 className="card text-white bg-info mb-4">FastAPI - React - MongoDB</h6>
        <div className="cardbody">
          <h5 className="card text-white bg-dark mb-3">Add Your Task</h5>
          <span className="card-text">
            <input className="form-control titleIn mb-2" onChange={event => 
              setTitle(event.target.value)} placeholder='Title'/>
            <input className="form-control descIn mb-2" onChange={event => 
              setDesc(event.target.value)} placeholder='Description '/>
            <button className="btn btn-outline-primary mx-2 mb-3" style=
            {{"borderRadius":"50px", "font-weight":"bold"}} onClick=
            {addToDoHandler}>Add Task</button>
          </span>

          <h5 className="card text-white bg-dark mb-3">Your Tasks</h5>
          <div>
            <TodoView todoList={todoList} />
          </div>

        </div>
        <h7 className="card text-dark bg-warning py-1 mb-0">Copyright 2022, 
          All rights reserved &copy;</h7>
      </div>
  );
}

export default App;
