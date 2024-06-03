import React from "react";
import Header from "./components/header";
import TodoList from "./components/todo-list";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <TodoList/>
    </React.Fragment>
  );
}

export default App;
