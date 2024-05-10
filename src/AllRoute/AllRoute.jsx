import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainRoute from "../MainRoute/MainRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Page/Home";
import Details from "../CourseDetails/Details";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoute></MainRoute>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/details/:id',
            element:<Details></Details>,
            loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`) 
        },

      ]
    },
  ]);

  export default router;