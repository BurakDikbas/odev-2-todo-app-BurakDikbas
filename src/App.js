
import './App.css';

import Title from "./Components/Title"
import NewTodo from "./Components/NewTodo"
import List from "./Components/List"
import Footer from "./Components/Footer"
import Filter from "./Components/Filter"
import { useState,useEffect } from "react"


function App() {
  const [todos, setTodos] = useState([
    {completed:"completed", name:"Learn JavaScript"},
    {completed:"", name:"Learn React"},
    {completed:"", name:"Have a life!"},
    ]);

  function handleChange(task) {
    setTodos([...todos,{completed:"",name:task}]);
  }
  function removeTask(list) {
    console.log(list);
    setTodos(list);
    console.log("todos", todos)
  }


  useEffect(() => {
    console.log("anan")
    return () => {
      console.log("baban")
    }
  }, [setTodos])
  

  return (
    <div>
      <section class="todoapp">
        <header class="header">
          <Title title="todos" />
          <NewTodo placeholder="What needs to be done?" onChange={handleChange}/>
        </header>
        <section class="main">
          <input class="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <List todos={todos} onChange={(list)=>removeTask(list)}/>
          <Filter list={todos}/>
        </section>
      </section>
      <Footer />
    </div>
  )
}

export default App