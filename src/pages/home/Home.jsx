import AddTodoCard from "../../components/addTodoCard/AddTodoCard"
import TodosList from "../../components/todosList/TodosList"
import { useTodo } from "../../hooks/useTodo"
import MainLayOut from "../../layouts/mainLayout/MainLayout"

const Home = () => {
  const { state } = useTodo()

  return (
    <MainLayOut>
        <section className="w-full h-full">
            <h1 className="font-bold text-2xl">All Tasks:</h1>
            <AddTodoCard/>
            <TodosList 
                todos={state.todos} 
                todosListStyle="flex flex-col w-full gap-5 mt-10 h-[60%] overflow-y-auto px-2"
            />
        </section>
    </MainLayOut>
  )
}

export default Home