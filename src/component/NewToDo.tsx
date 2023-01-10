import { ReactNode, useRef, useContext } from "react";
import styles from "./NewToDo.module.css";
import todoContext from "../store/todo-context";

type NewToDoProps = {
  chidren?: ReactNode;
};

function NewToDo(props: NewToDoProps) {
  const todoCtx = useContext(todoContext);
  const refInput = useRef<HTMLInputElement>(null);
  const addToDoHandler = function (e: React.FormEvent) {
    e.preventDefault();
    const inputToDo = refInput.current!.value;
    if (inputToDo.trim().length === 0) return;
    todoCtx.addToDoHandler(inputToDo);
  };

  return (
    <form className={styles.form} onSubmit={addToDoHandler}>
      <label htmlFor="newToDo">new to do</label>
      <input type="text" id="newToDo" ref={refInput} />
      <button type="submit">Add</button>
    </form>
  );
}

export default NewToDo;
