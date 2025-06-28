import React,{useState} from 'react'
import TodoTile from './TodoTile'

const TodoPageComponent = () => {
    const [todo , setTodo] = useState([]);
    const [newtodo , setnewTodo] = useState('');

    function addTodo(){
        if(newtodo.trim() !== ''){
            setTodo([...todo,newtodo]);
            setnewTodo('');
        }
    }
  return (
    <div>
      <input type="text" name="todo" id="todo" value={newtodo} onChange={(e) => setnewTodo(e.target.value)} />
      <button type="button" onClick={addTodo}>AddTodo</button>

      <div>
        {todo.map((task,index)=>(
            <TodoTile key={index} task={task}/>
        ))}
      </div>
    </div>
    
  )
}

export default TodoPageComponent;
