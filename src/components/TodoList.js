import React from 'react';
import Todo from './Todo';


const TodoList = ({todos,setTodos,filteredTodos}) =>{
    console.log(todos);
    return (
        <div className="todo-container">
        <ul className="todo-list"></ul>
        {filteredTodos.map(todo =>(
            <Todo 
            setTodos = {setTodos}
            todos ={todos}
            todo={todo}
            key={todo.id} 
            text = {todo.text}
            />
        ))}
        </div>


    );


};
export default TodoList;