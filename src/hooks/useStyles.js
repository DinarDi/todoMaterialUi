import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
  },
  formFlex: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 15,
  },
  textField: {
    marginRight: 15,
  },
  todoCompleted: {
    textDecoration: "line-through",
  },
}));
