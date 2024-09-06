import { Link } from "react-router-dom"
import Date from "../date/date"

const Sidebar = () => {
  return (
    <aside className="px-[4.063rem] pt-20">
      <Date />
      <ul className="flex flex-col gap-6 text-gray3 font- mb-72">
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/filteredTasks/groceries">Groceries</Link>
        </li>
        <li>
          <Link to="/filteredTasks/college">College</Link>
        </li>
        <li>
          <Link to="/filteredTasks/payments">Payments</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar