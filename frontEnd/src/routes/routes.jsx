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
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Registration/Register";
import AddTask from "../pages/PostTask/AddTask";

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
            path: "/post-task",
            element: <AddTask />
        },
        {
            path: "/register",
            element: <Register />
        }
      ]
    },
  ]);
