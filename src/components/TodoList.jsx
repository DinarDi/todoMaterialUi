import { Container, Grid } from "@material-ui/core";
import React from "react";
import { useStyles } from "../hooks/useStyles";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, toggleCheck }) => {
  const { root } = useStyles();

  return (
    <Container className={root}>
      <Grid container direction="column" spacing={3}>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleCheck={toggleCheck}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default TodoList;
