import Input from "../common/input/Input"

const Todo = ({todos}) => {
  return (
    <div className="flex flex-col gap-4 mt-10 px-2">
      {
        todos.map((todo) => {
          return (
            <span 
              key={todo.id} 
              className="flex justify-start items-center gap-2"
            >
                <Input type="checkbox" />
                <h2>{todo.todo}</h2>
            </span>
          )
        })
      }
    </div>
  )
}

export default Todo