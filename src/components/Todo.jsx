import {
  Card,
  CardContent,
  Checkbox,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import React from "react";
import { useStyles } from "../hooks/useStyles";

const Todo = ({ todo, deleteTodo, toggleCheck }) => {
  const { id, title, completed } = todo;
  const { todoCompleted } = useStyles();

  return (
    <Grid item>
      <Card variant="outlined">
        <CardContent>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            wrap="nowrap"
          >
            <Grid item>
              <Grid
                container
                direction="row"
                alignItems="center"
                wrap="nowrap"
                spacing={1}
              >
                <Grid item>
                  <Checkbox
                    color="primary"
                    checked={completed}
                    onChange={() => toggleCheck(id)}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    component="h6"
                    className={completed ? todoCompleted : null}
                  >
                    {title}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <IconButton onClick={() => deleteTodo(id)}>
                <DeleteOutlined />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Todo;
