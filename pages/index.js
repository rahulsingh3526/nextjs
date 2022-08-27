import React from "react"
import Navbar from "../src/components/Navbar.jsx"
import {useState,useEffect} from "react"
import Todo from "../src/components/Todo.jsx"

export default function Home(){

     const[todo, setTodo] = useState([])
     const[input, setInput] = useState('')

     function addInput(e){
         setInput(e.target.value)
     }

     function addTodo(){
         setTodo(prev => [input, ...prev])
     }


     useEffect(() => {
      const todoList = JSON.parse(localStorage.getItem('list'));
      setTodo(todoList);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('list', JSON.stringify(todo));
    }, [todo]);

return(
 <>
  <h1>todo list</h1>

  <input onChange = {addInput} type="text"/>

  <button onClick = {addTodo}>save</button>

  <Todo  todo ={todo}/>

 </>
)

}