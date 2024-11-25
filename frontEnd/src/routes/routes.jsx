import {
    createBrowserRouter
  } from "react-router-dom"
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import TasksList from "../pages/TasksList/TasksList";
import TaskDetails from "../pages/TaskDetails/TaskDetails";
import Profiles from "../pages/Profiles/Profiles";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import NotFound from "../pages/NotFound/NotFound";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
            path: "",
            element: <Home />
        },
        {
            path: "/tasks",
            element: <TasksList />
        },
        {
            path: "/task/:id",
            element: <TaskDetails />
        },
        {
            path: "/profiles",
            element: <Profiles />
        },
        {
            path: "/Dashboard",
            element: <Dashboard />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Registration />
        }
      ]
    },
  ]);
