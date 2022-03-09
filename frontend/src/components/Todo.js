import React from "react";
import axios from "axios";

function TodoItem(props) {
    const deleteTodoHandler = (title) => {
        axios.delete(`http://localhost:8000/api/todo${title}`)
        .then(res => console.log(res.data))
    }
    return (
        <div>
            <p>
                <span style={{ "fontWeight": 'bold, underline' }}>
                    {props.todo.title} : {props.todo.description}
                </span>
                <button className="btn btn-outline-danger my-2 mx-2" style={
                    {'borderRadius':'50px'}} onClick={() => 
                    deleteTodoHandler(props.todo.title)}>X</button>
            </p>

        </div>
    );
}

export default TodoItem;