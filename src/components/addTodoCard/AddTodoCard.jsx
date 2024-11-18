import Input from "../common/input/Input"
import Button from "../common/button/Button"
import Tags from "../tags/Tags"
import { IoIosAddCircle } from "react-icons/io";
import { useTodo } from "../../hooks/useTodo";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';


const AddTodoCard = () => {
  const { state, dispatch } = useTodo()
  const [isAdded, setIsAdded] = useState(false)

  function addTodo () {
    if (state.inputValue.trim()) {
      setIsAdded(true)
      dispatch({ type: "add-todo" });
      setTimeout(() => setIsAdded(false), 0);
      toast.success('Todo has been added successfully!')
    } else {
      toast.error('Please enter a task title.')
    }
  }

  return (
    <div className="flex w-full mt-10 gap-4 border border-solid p-4 rounded-md border-tag-bg">
        <div
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          className="flex flex-col gap-4 w-full"
        >
            <Input 
                type="text" 
                placeholder="Add a new task"
                onChange={(e) => dispatch({ type: "set-input-value", payload: e.target.value })}
                inputStyle="bg-primary-color focus:outline-none rounded-[8px] py-3 px-6 w-full placeholder:text-placeholder"
                value = {state.inputValue}
            />
            <Tags isAdded={isAdded} setCategory={(category) => dispatch({ type: "set-category", payload: category })}/>
        </div>
        <Button 
            title={<><IoIosAddCircle size={24} /> Add</>} 
            onClick={addTodo}
            buttonStyle="flex justify-center items-center border-2 border-dashed border-tag-bg p-4 rounded-md text-tag-bg" 
        />
        <Toaster />
    </div>
  )
}

export default AddTodoCard