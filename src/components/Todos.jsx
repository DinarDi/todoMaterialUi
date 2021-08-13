import { Container, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos([...todos, { id: Date.now(), title, completed: false }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCheckbox = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <Container>
      <Typography variant="h4" component="h2" align="center">
        App for Todos
      </Typography>
      <AddTodo addHandler={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={removeTodo}
        toggleCheck={toggleCheckbox}
      />
    </Container>
  );
};

export default Todos;
