import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainRoute from "../MainRoute/MainRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Page/Home";
import Details from "../CourseDetails/Details";

import EnrollmentDetails from "../Enrollment/EnrollmentDetails";


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
                path:'/dashboard',
                element:<EnrollmentDetails></EnrollmentDetails>
        },
        {
            path:'/details/:id',
            element:<Details></Details>,
            loader:({params})=>fetch(`https://course-server-side-lyart.vercel.app/course/${params.id}`) 
        },

      ]
    },
    // {
    //   path:"/dashboard",
    //   element:<Dashboard></Dashboard>,
    //   children:[
    //     {
    //       path:'Course',
    //       element:<EnrollmentDetails></EnrollmentDetails>
    //     }
    //   ]
    // }
  ]);

  export default router;