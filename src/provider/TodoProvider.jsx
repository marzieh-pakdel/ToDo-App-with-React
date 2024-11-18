import { TodoContext } from "../context/TodoContext";
import { useEffect, useReducer } from "react";

function getInitialState() {
  const savedTodos = localStorage.getItem("todosState");

  try {
    const todos = savedTodos ? JSON.parse(savedTodos) : [];
    return {
      inputValue: "",
      category: "",
      todos: todos,
    };
  } catch (error) {
    console.error("Invalid JSON in localStorage:", error);
    localStorage.removeItem("todosState");
    return {
      inputValue: "",
      category: "",
      todos: [],
    };
  }
}

function reducer (state, action) {
  switch (action.type) {
      case "set-input-value":
        return { ...state, inputValue: action.payload };
      case "set-category":
        return { ...state, category: action.payload };
      case "add-todo":{
        const newTask = {
          id: Date.now(),
          task: state.inputValue,
          category: state.category || "uncategorized",
          isChecked: false,
        };
        return {
          ...state,
          todos: [...state.todos, newTask],
          inputValue: "",
          category: "",
        };
      }
      case "delete-todo": {
        const updatedTodos = state.todos.filter((todo) => todo.id !== action.payload)
        return { ...state, todos: updatedTodos}
      }
      case "toggle-checkbox": {
        const updatedTodos = state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, isChecked: action.payload.isChecked };
          }
          return todo;
        });
        return { ...state, todos: updatedTodos };
      }
      default:
        return state;
  }
}

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, getInitialState());

  useEffect(() => {
    localStorage.setItem('todosState', JSON.stringify(state.todos))
  }, [state.todos])

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;