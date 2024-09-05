import Input from "../../components/common/input/Input"
import Layout from "../../components/layout/Layout"

const Home = () => {
    return (
        <Layout>
            <h1 className="mb-9 font-bold text-2xl">All Tasks</h1>
            <Input 
            type="text" 
            placeholder="Add a new task insdie ‘All’ category"
            inputStyle="bg-gray1 focus:outline-none rounded-[8px] py-3 pl-6 pr-96 mb-32 placeholder:text-gray2"/>
        </Layout>
    )
}

export default Home