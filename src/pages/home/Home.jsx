import Input from "../../components/common/input/Input"
import Layout from "../../components/layout/Layout"

const Home = () => {
    return (
        <Layout>
            <Input 
            type="text" 
            placeholder="Add a new task insdie ‘All’ category"
            inputStyle="bg-gray1 focus:outline-none rounded-[8px] py-3 px-6"/>
        </Layout>
    )
}

export default Home