import Button from "../common/button/Button"
import Input from "../common/input/Input"
import { RiDeleteBin5Line } from "react-icons/ri";

const Todo = ({todos}) => {
  return (
    <div className="flex flex-col gap-4 mt-10">
      {
        todos.map((todo) => {
          return (
            <div 
              key={todo.id}
              className="p-2 flex justify-between items-center bg-primary-color rounded-md"
            >
            <span 
              className="flex justify-start items-center gap-5"
            >
                <Input type="checkbox" />
                <h2>{todo.todo}</h2>
                <Button 
                  title={todo.category}
                  buttonStyle="bg-tag-bg text-white rounded-[4px] py-1 px-8 text-xs font-normal"
                />
            </span>
            <RiDeleteBin5Line color="red" size={20} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Todo