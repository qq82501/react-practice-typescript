import { ReactNode, useState } from "react";
import todoContext from "./todo-context";
import todo from "../model/todo";
import { todoContextType } from "./todo-context";

type todoContextProviderProps = {
  children?: ReactNode;
};

function TodoContextProvider(props: todoContextProviderProps) {
  const [toDos, setToDos] = useState<todo[]>([]);

  const addToDoHandler = function (toDoText: string) {
    setToDos((prev) => [...prev, new todo(toDoText)]);
  };

  const removeToDoHandler = function (toDoText: string) {
    setToDos((prev) => prev.filter((todo) => todo.title !== toDoText));
  };

  const contextValue: todoContextType = {
    toDos,
    addToDoHandler,
    removeToDoHandler,
  };

  return (
    <todoContext.Provider value={contextValue}>
      {props.children}
    </todoContext.Provider>
  );
}
export default TodoContextProvider;
