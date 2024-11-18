import { Outlet } from "react-router-dom"
import MainLayout from "../../layouts/mainLayout/MainLayout"

const FilteredTasks = ({children}) => {
  return (
    <MainLayout>
      {children}
        <Outlet />   
    </MainLayout>
  )
}

export default FilteredTasks