import React from 'react';
import ToDoList from './ToDoList'
//iomport useState hook
    // import {useState} from 'react';
// use useRef hook to refer to other elements, such as input text when using onClick button function
    // import {useRef} from 'react';
// uuid for new random gen keys
import { v4 as uuidv4} from 'uuid';

//use the hook useEffect to save changes locally
import {useState, useRef, useEffect} from 'react'

//setting name of file for local storage of data
const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  //want to store all Todos inside of a state, so react re-renders everytime they are changed
  //use a useState Hook! (object destructuring)
  // const [todos, setTodos] = useState(['dishes', 'cooking'])
  //let's isntead of array, make each todo item an object
  const [todos, setTodos] = useState([{id: 1, name:'dishes', complete: false}, 
                                      {id: 2, name:'cooking', complete: true}
                                    ])
  const todoNameRef = useRef() //to give access to elements where variable 'ref' is set to this constants variable name

  //LOAD the local storage 
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  //add name from input to list of todos onClick
  function handleAddTodo (e) {
    //this "todoNameRef.current" refers to whatever element we are refering to
    const name = todoNameRef.current.value
    // todos.push({id:3, name: name, complete: false})
    if (name===""){}
    else{
      const item = {id: uuidv4(), name: name, complete: false}
      setTodos(prevTodos =>{
        return [...prevTodos, item]}
        )
    }
    todoNameRef.current.value = null
  }

  return (
    <>
      <ToDoList todos = {todos}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo} >Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left todo</div>
    </>
  );
}

export default App;
