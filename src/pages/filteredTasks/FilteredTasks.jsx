import { Outlet } from "react-router-dom"
import Layout from '../../components/layout/Layout'

const FilteredTasks = () => {
  return (
    <Layout>
        <div>filteredTasks</div>
        <Outlet />   
    </Layout>
  )
}

export default FilteredTasks