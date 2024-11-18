import TodosList from "../../components/todosList/TodosList"
import { useTodo } from "../../hooks/useTodo"

const Groceries = () => {
    const { state } = useTodo()

    return (
        <div className="w-full h-full py-4">
            <TodosList                 
                todos={state.todos.filter((todo) => todo.category === "Groceries")} 
                todosListStyle="flex flex-col w-full gap-5 h-full overflow-y-auto px-2"/>
        </div>
    )
}

export default Groceries