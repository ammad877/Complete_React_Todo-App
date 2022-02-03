import React,{useState} from 'react';
import ShowTodo from './showTodo';

function Todo(){

    const [task, inputTask] = useState("")
    const [data, setData] = useState([])
    const changeValue = (e) => {
        inputTask(e.target.value)
    };

    const submitValue = (e) => {
        e.preventDefault();
        const newData = task;
        setData([...data, newData])
        inputTask("")
    };

    const del = (a) => {
        const finalData = data.filter((val, index) => {
          return index !== a;
        });
        setData(finalData);
      };

    return(
        <div>
            <h4>Todo App</h4>
        <form onSubmit={submitValue}>
        <input type="text" placeholder='Input Task' value={task} onChange={changeValue}></input>
        <button type="submit">Add Todo</button>    
        </form>

        {data.map((value, index) => {
        return (
          <ShowTodo id={index} task={value} onSelect={del}/>
        );
      })}

        </div>
    )
};

export default Todo;