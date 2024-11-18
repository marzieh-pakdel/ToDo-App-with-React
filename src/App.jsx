import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import TodoProvider from "./provider/TodoProvider";

const App = () => {
  return (
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  )
};

export default App;