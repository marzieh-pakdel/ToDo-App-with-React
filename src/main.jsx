import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home/Home.jsx'
import FilteredTasks from './pages/filteredTasks/filteredTasks.jsx'
import NotFound from './pages/404/NotFound.jsx'
import Groceries from './pages/groceries/Groceries.jsx'
import College from './pages/college/College.jsx'
import Payments from './pages/Payments/Payments.jsx'
import './design/main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/filteredTasks",
    element: <FilteredTasks />,
    // errorElement: <NotFound />,
    children: [
      {
        path: "groceries",
        element: <Groceries />
      },
      {
        path: "college",
        element: <College />
      },
      {
        path: "payments",
        element: <Payments />
      }
    ]
  }
]) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/filteredTasks" element={<FilteredTasks />}>
          <Route path="/Groceries" element={<Groceries />}></Route>
          <Route path="/College" element={<College />}></Route>
          <Route path="/Payments" element={<Payments />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter> */}
  </StrictMode>,
)
