import React,{useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //USE effect
  
  const[inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilterdTodos] = useState([]);
  useEffect(() =>{
    getLocalTodos();
  },[]);
  useEffect(() =>{
    filterHandler();
    saveLocalTodos();
  },[todos,status]);
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilterdTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilterdTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilterdTodos(todos);
        break;
      
    }
  }
  const saveLocalTodos = () =>{
      localStorage.setItem("todos",JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos",JSON.stringify([]));
    }
    else{
      let todolocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todolocal);
    }
  }



  return (
    <div className="App">
      <header>
      <h1>My Todo List</h1>
      </header>
      <Form inputText={inputText}
       todos={todos} 
       setTodos = {setTodos} 
       setInputText = {setInputText}
       setStatus ={setStatus}
       
       />
      <TodoList
       filteredTodos = {filteredTodos} 
       setTodos={setTodos} 
       todos={todos}/>
    </div>
  );
}

export default App;
