import Input from "../common/input/Input"

const Todo = ({todo}) => {
  return (
    <div>
        <Input type="checkbox" />
        <h2>{todo}</h2>
    </div>
  )
}

export default Todo