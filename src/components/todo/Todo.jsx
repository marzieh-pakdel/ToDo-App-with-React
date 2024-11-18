import Input from "../common/input/Input"
import Button from "../common/button/Button"
import { RiDeleteBin5Line } from "react-icons/ri";  
import { useTodo } from "../../hooks/useTodo";
import toast, { Toaster } from 'react-hot-toast';

const Todo = ({todo}) => {
  const { dispatch } = useTodo()

  function handleCheckboxIsChecked(e, todoId) {
    dispatch({
      type: "toggle-checkbox",
      payload: { id: todoId, isChecked: e.target.checked },
    });
    if (e.target.checked) {
      toast('Good Job!', {
        icon: '👏',
      });
    }
  }
  
  
  function deleteTodo (removedTodoId) {
    dispatch({type: "delete-todo", payload: removedTodoId})
    toast.success("Todo has been updated successfully!")
  }

  return (
    <li className="w-full flex">
        <span className="flex justify-start items-center gap-5 w-full">
          <Input 
            type="checkbox"
            checked={todo.isChecked}
            onChange={(e) => handleCheckboxIsChecked(e, todo.id)}
          />
          <h2 className={`${todo.isChecked ? "line-through" : ""}`}>{todo.task}</h2>
          <Button 
            title={todo.category}
            buttonStyle={
              `${todo.isChecked ? "bg-[#a6acaf]" : "bg-tag-bg"}
               text-white rounded-[4px] py-1 px-8 text-xs font-normal cursor-default`
            }
          />
        </span>
        <RiDeleteBin5Line 
          onClick={() => deleteTodo(todo.id)} 
          color="red" 
          size={20} 
          style={todo.isChecked ? {display:"none"} : {cursor: 'pointer' }} 
        />
        <Toaster />
    </li>
  )
}

export default Todo