import { Link, useLocation } from "react-router-dom"
import Date from "./date/date"

const Sidebar = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path 
  
  return (
    <aside className="px-[3rem] pt-20 flex flex-col">
      <Date />
      <ul className="flex flex-col gap-6 text-gray3 mb-64 px-2">
        <li>
          <Link 
            to="/" 
            className={`${
              isActive('/') && "underline underline-offset-4 decoration-tag-bg text-tag-bg"
            }`}
          >
            All
          </Link>
        </li>
        <li>
          <Link 
            to="/filteredTasks/groceries"
            className={`${
              isActive('/filteredTasks/groceries') && "underline underline-offset-4 decoration-tag-bg text-tag-bg"
            }`}
          >
            Groceries
          </Link>
        </li>
        <li>
          <Link 
            to="/filteredTasks/college"
            className={`${
              isActive('/filteredTasks/college') && "underline underline-offset-4 decoration-tag-bg text-tag-bg"
            }`}
          >
            College
          </Link>
        </li>
        <li>
          <Link 
            to="/filteredTasks/payments"
            className={`${
              isActive('/filteredTasks/payments') && "underline underline-offset-4 decoration-tag-bg text-tag-bg"
            }`}
          >
            Payments
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar