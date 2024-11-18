import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw Error("useBasket must be used as a child of todoProvider!");
  } else {
    return context;
  }
};