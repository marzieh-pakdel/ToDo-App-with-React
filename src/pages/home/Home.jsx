import { useEffect, useState } from "react"
import Button from "../../components/common/button/Button"
import Input from "../../components/common/input/Input"
import Layout from "../../components/layout/Layout"
import Tags from "../../components/tags/Tags"
import Todo from "../../components/todo/Todo"
import { IoIosAddCircle } from "react-icons/io";

const Home = () => {
    const [inputValue, setInputValue] = useState("")
    const [category, setCategory] = useState("")
    const [todos, setTodos] = useState([])

    function addTodo () {
        if (inputValue.trim()) {
            const newTask = { id: Date.now(), todo: inputValue, category: category || "uncategorized" };
            const newTodos = [...todos, newTask];
            setTodos(newTodos);
            setInputValue("");
        }
    }

    console.log(inputValue)
    console.log(todos)

    useEffect(() => {
        const storedTodos = localStorage.getItem("todo");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todos));
    }, [todos])

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
                        value = {inputValue}
                    />
                    <Tags setCategory={setCategory}/>
                </div>
                <Button 
                    title={<><IoIosAddCircle size={24} /> Add</>} 
                    onClick={addTodo}
                    buttonStyle="flex justify-center items-center border-2 border-dashed border-tag-bg p-4 rounded-md text-tag-bg" 
                />
            </div>
            <Todo todos={todos} />
        </Layout>
    )
}

export default Home