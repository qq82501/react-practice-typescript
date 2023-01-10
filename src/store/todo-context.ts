import React from "react";
import todo from "../model/todo";

export type todoContextType = {
  toDos: todo[];
  removeToDoHandler: (toDoText: string) => void;
  addToDoHandler: (toDoText: string) => void;
};

const initailState = {
  toDos: [],
  removeToDoHandler: () => {},
  addToDoHandler: () => {},
};
const todoContext = React.createContext<todoContextType>(initailState);
export default todoContext;
