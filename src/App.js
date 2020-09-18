import React from 'react';
import ToDoList from './ToDoList'
//iomport useState hook
import {useState} from 'react';
// use useRef hook to refer to other elements, such as input text when using onClick button function
import {useRef} from 'react';



function App() {
  //want to store all Todos inside of a state, so react re-renders everytime they are changed
  //use a useState Hook! (object destructuring)
  // const [todos, setTodos] = useState(['dishes', 'cooking'])
  //let's isntead of array, make each todo item an object
  const [todos, setTodos] = useState([{id: 1, name:'dishes', complete: false}, 
                                      {id: 2, name:'cooking', complete: true}
                                    ])
  
  function handleAddTodo (e) {

  }
                                    return (
    <>
      <ToDoList todos = {todos}/>
      <input type="text" />
      <button onClick={handleAddTodo} >Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left todo</div>
    </>
  );
}

export default App;
