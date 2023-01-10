import { useContext } from "react";
import ListItem from "./ListItem";
import styles from "./Todo.module.css";
import todoContext from "../store/todo-context";

function Todo() {
  const todoCtx = useContext(todoContext);
  return (
    <ul className={styles.todos}>
      {todoCtx.toDos.map((todo) => (
        <ListItem
          key={todo.id}
          toDoItem={todo}
          onRemoveToDo={todoCtx.removeToDoHandler}
        />
      ))}
    </ul>
  );
}

export default Todo;
