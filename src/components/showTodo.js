import React from "react";

function ShowTodo(props) {
  return (
    <div>
    <div><h6>{props.task}</h6></div>
    <div><button onClick={() => {
        props.onSelect(props.id)
    }} >X</button></div>
    </div>
  ) 
}

export default ShowTodo;
