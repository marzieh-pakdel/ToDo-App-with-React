import { useEffect, useState } from "react"
import Button from "../../components/common/button/Button"
import Input from "../../components/common/input/Input"
import Layout from "../../components/layout/Layout"
import Tags from "../../components/tags/Tags"
// import Todo from "../../components/todo/Todo"
import { IoIosAddCircle } from "react-icons/io";

const Home = () => {
    const [inputValue, setInputValue] = useState("")
    const [category, setCategory] = useState("")
    const [task, setTask] = useState({id:"", todo:"", category:""})
    const [todos, setTodos] = useState([])

    function addTodo () {
        if(inputValue.trim()) {
            setTask({id: inputValue, todo:inputValue, category:category || "Uncategorized"})
            const newTodos = [...todos, task]
            setTodos(newTodos)
        }
    }

    console.log(todos)

    // useEffect(() => {
    //     const storedTodos = JSON.parse(localStorage.getItem("todo")) || [];
    //     setTodos(storedTodos);
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem("todo", JSON.stringify(todos));
    // }, [todos])

    return (
        <Layout>
            <h1 className="mb-9 font-bold text-2xl">All Tasks</h1>
            <div className="flex gap-4 border border-solid p-4 rounded-md border-tag-bg">
                <div className="flex flex-col gap-4">
                    <Input 
                        type="text" 
                        placeholder="Add a new task"
                        onChange={(e) => setInputValue(e.target.value)}
                        inputStyle="bg-primary-color focus:outline-none rounded-[8px] py-3 pl-6 pr-48 placeholder:text-placeholder"
                    />
                    <Tags setCategory={setCategory}/>
                </div>
                <Button 
                    title={<><IoIosAddCircle size={24} /> Add</>} 
                    onClick={addTodo}
                    buttonStyle="flex justify-center items-center border-2 border-dashed border-tag-bg p-4 rounded-md text-tag-bg" 
                />
            </div>
            {/* <Todo /> */}
        </Layout>
    )
}

export default Home