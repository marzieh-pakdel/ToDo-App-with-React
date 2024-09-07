import { Outlet } from "react-router-dom"
import Layout from "../../components/layout/Layout"

const FilteredTasks = ({children}) => {
  return (
    <Layout>
      {children}
        <Outlet />   
    </Layout>
  )
}

export default FilteredTasks