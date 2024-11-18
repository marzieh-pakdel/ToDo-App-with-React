import TodosList from "../../components/todosList/TodosList"
import { useTodo } from "../../hooks/useTodo"

const Paymentes = () => {
  const { state } = useTodo()

  return (
      <div className="w-full h-full py-4">
          <TodosList                 
              todos={state.todos.filter((todo) => todo.category === "Payments")} 
              todosListStyle="flex flex-col w-full gap-5 h-[10%] overflow-y-auto px-2"/>
      </div>
  )
}

export default Paymentes
