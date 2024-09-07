import { useState } from "react";
import Button from "../common/button/Button"
import Input from "../common/input/Input"
import { RiDeleteBin5Line } from "react-icons/ri";

const Todo = ({todos, setTodos}) => {
  const [checkedTodos, setCheckedTodos] = useState({});

  function handleCheckboxChange(e, todoId) {
    setCheckedTodos((prev) => ({
      ...prev,
      [todoId]: e.target.checked
    }));
  }
  
  function deleteTodo (removedTodoId) {
    const updatedTodos = todos.filter((todo) => todo.id !== removedTodoId)
    setTodos(updatedTodos)
    localStorage.setItem("todos", JSON.stringify(updatedTodos))
  }

  return (
    <div className="flex flex-col gap-4 mt-10">
      {
        todos.map((todo) => {
          return (
            <div 
              key={todo.id}
              className={
                `${checkedTodos[todo.id] ? "bg-done-task" : "bg-primary-color"}
                p-2 flex justify-between items-center rounded-md`}
            >
            <span 
              className="flex justify-start items-center gap-5"
            >
                <Input 
                  type="checkbox"
                  checked={checkedTodos[todo.id] || false}
                  onChange={(e) => handleCheckboxChange(e, todo.id)}
                />
                <h2 className={`${checkedTodos[todo.id] ? "line-through" : ""}`}>{todo.todo}</h2>
                <Button 
                  title={todo.category}
                  buttonStyle={
                    `${checkedTodos[todo.id] ? "bg-[#a6acaf]" : "bg-tag-bg"}
                     text-white rounded-[4px] py-1 px-8 text-xs font-normal cursor-default`
                  }
                />
            </span>
            <RiDeleteBin5Line 
              onClick={(todo) => deleteTodo(todo.id)} 
              color="red" 
              size={20} 
              style={checkedTodos[todo.id] ? {display:"none"} : {cursor: 'pointer' }} 
            />
            </div>
          )
        })
      }
    </div>
  )
}

export default Todo