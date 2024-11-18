import Todo from "../todo/todo"

const TodosList = ({todosListStyle, todos}) => {
  return (
    <ul className={todosListStyle}>
        {todos.map((todo) => {
            return <Todo key={todo.id} todo={todo}/>
        })}
    </ul>
  )
}

export default TodosList