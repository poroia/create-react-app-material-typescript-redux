import {
  Badge,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useHistory } from "react-router-dom";
import { Todo } from "../../redux/model";

interface Props {
  todoList: Todo[];
}

export function Drawer(props: Props) {
  const { todoList } = props;
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <div className={classes.drawerHeader} />
      <Divider />
      <List>
        <ListItem button onClick={() => history.push("/")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => history.push("/todo")}>
          <ListItemIcon>
            <TodoIcon todoList={todoList} />
          </ListItemIcon>
          <ListItemText primary="Todo" />
        </ListItem>
      </List>
    </div>
  );
}

function TodoIcon(props: Props) {
  const { todoList } = props;

  let uncompletedTodos = todoList.filter((t) => t.completed === false);

  if (uncompletedTodos.length > 0) {
    return (
      <Badge color="secondary" badgeContent={uncompletedTodos.length}>
        <FormatListNumberedIcon />
      </Badge>
    );
  } else {
    return <FormatListNumberedIcon />;
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  drawerHeader: { ...theme.mixins.toolbar },
}));
