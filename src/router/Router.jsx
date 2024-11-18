import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import NotFound from "../pages/404/NotFound";
import FilteredTasks from '../pages/filteredTasks/FilteredTasks';
import Groceries from '../pages/groceries/Groceries';
import College from '../pages/college/College';
import Payments from '../pages/Payments/Payments';

export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: (
      <Home />
    ),
  },
  {
    path: "/filteredTasks",
    element: (
      <FilteredTasks />
    ),
    children: [
      {
        path: "groceries",
        element: (
          <Groceries />
        )
      },
      {
        path: "college",
        element: (
          <College />
        )
      },
      {
        path: "payments",
        element: (
          <Payments />
        )
      }
    ]
  },
]);