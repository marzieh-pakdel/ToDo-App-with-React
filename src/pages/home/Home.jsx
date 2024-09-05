import { useState } from "react"
import Button from "../../components/common/button/Button"
import Input from "../../components/common/input/Input"
import Layout from "../../components/layout/Layout"
import Tags from "../../components/tags/Tags"
import Todo from "../../components/todo/Todo"
import { IoIosAddCircle } from "react-icons/io";

const Home = () => {
    const [inputValue, setInputValue] = useState("")

    function addTodo () {
        console.log(inputValue)
    }

    return (
        <Layout>
            <h1 className="mb-9 font-bold text-2xl">All Tasks</h1>
            <div className="flex gap-4 border border-solid p-4 rounded-md border-tag-bg">
                <div className="flex flex-col gap-4">
                <Input 
                    type="text" 
                    placeholder="Add a new task insdie ‘All’ category"
                    onChange={(e) => setInputValue(e.target.alue)}
                    inputStyle="bg-light-blue focus:outline-none rounded-[8px] py-3 pl-6 pr-48 placeholder:text-placeholder"
                />

                <Tags />
                </div>

                <Button 
                    title={<><IoIosAddCircle size={24} /> Add</>} 
                    onClick={addTodo}
                    buttonStyle="flex justify-center items-center border-2 border-dashed border-tag-bg p-4 rounded-md text-tag-bg" 
                />
            </div>
            <Todo />
        </Layout>
    )
}

export default Home