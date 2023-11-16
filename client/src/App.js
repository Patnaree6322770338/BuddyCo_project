import {createBrowserRouter,RouterProvider,Route, Outlet,} from "react-router-dom";
import Login from "./Login.js"
import './App.css';
import AuthForms from "./pages/Authform.js";
import Home from "./pages/Home.js";



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
    </div>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/auth",
    element: <AuthForms/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },

 
  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}



export default App;
