import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../Layout/Main";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Error from "../components/Error/Error";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import PrivateRoute from "./PrivateRoute";
import Blog from "../components/Blog/Blog";
import About from "../components/About/About";



const router = createBrowserRouter([
    {
        path:'*',
        element: <Error></Error>
      },
    {
        path: '/',
        element : <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
               path: '/register',
               element: <Register></Register>
            },
            {
                path: '/recipe/:id',
                element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment10-recipe-hunting-server-sakibmohammad79.vercel.app/recipe/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            }

        ]
    }
])

export default router;
