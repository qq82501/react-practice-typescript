import { ReactNode } from "react";
import todo from "../model/todo";
import styles from "./ListItem.module.css";

type ListItemProps = {
  children?: ReactNode;
  key?: ReactNode;
  toDoItem: todo;
  onRemoveToDo: (toDoText: string) => void;
};

function ListItem(props: ListItemProps) {
  const removeToDoHandler = function (e: React.MouseEvent) {
    props.onRemoveToDo(props.toDoItem.title);
  };
  return (
    <li className={styles.item} onClick={removeToDoHandler}>
      {props.toDoItem.title}
    </li>
  );
}

export default ListItem;
