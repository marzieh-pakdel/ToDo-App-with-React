import Todos from "../../components/todo/Todos"
import { useEffect, useState} from "react";

const Groceries = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      const groceryCategoryTodos = storedTodos.filter((todo) => {
        return todo.category === "Groceries"
      })
        setTodos(groceryCategoryTodos);
      }
  }, [])

  return (
      <div>
        <Todos todos={todos} setTodos={setTodos}/>
      </div>
  )
}

export default Groceries