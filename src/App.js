
import './App.css';

import Title from "./Components/Title"
import NewTodo from "./Components/NewTodo"
import List from "./Components/List"
import Footer from "./Components/Footer"
import Filter from "./Components/Filter"
import { useState } from "react"


function App() {
  const [todos, setTodos] = useState("");
  function handleChange(newValue) {
    debugger;
    console.log(todos)
    setTodos(newValue)
  }
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
          <List />
          <Filter />
        </section>
      </section>
      <Footer />
    </div>
  )
}

export default App