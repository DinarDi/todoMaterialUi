import { Container, Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useStyles } from "../hooks/useStyles";

const AddTodo = ({ addHandler }) => {
  const [title, setTitle] = useState("");
  const { formFlex, textField } = useStyles();

  const submitHandler = (e) => {
    e.preventDefault();
    addHandler(title);
    setTitle("");
  };

  return (
    <Container>
      <form
        noValidate
        autoComplete="off"
        className={formFlex}
        onSubmit={submitHandler}
      >
        <TextField
          className={textField}
          label="Todo text"
          variant="outlined"
          color="primary"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          startIcon={<AddCircleIcon />}
        >
          Add
        </Button>
      </form>
    </Container>
  );
};

export default AddTodo;
