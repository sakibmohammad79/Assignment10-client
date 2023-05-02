import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../Layout/Main";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Error from "../components/Error/Error";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";



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
                element: <RecipeDetails></RecipeDetails>,
                loader: ({params}) => fetch(`https://assignment10-recipe-hunting-server-sakibmohammad79.vercel.app/recipe/${params.id}`)
            }

        ]
    }
])

export default router;

// [
//     {
//       id: '{{objectId()}}',
//       picture: 'http://placehold.it/32x32',
//       userPicture: 'http://placehold.it/32x32',
//       userRating: '{{floating(3, 5)}}',
//       yearOfExperience: '{{integer(5, 10)}}',
//       name: '{{firstName()}} {{surname()}}',
//       userName: '{{firstName()}} {{surname()}}',
//       userGender: '{{gender()}}',
//       Gender: '{{gender()}}',
//       company: '{{company().toUpperCase()}}',
//       email: '{{email()}}',
//       phone: '+1 {{phone()}}',
//       address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}',
//       about: '{{lorem(1, "paragraphs")}}',
//       userComment: '{{lorem(1, "paragraphs")}}',
//       numberOfRecife: '{{integer(10, 20)}}',
//       like: '{{integer(400, 600)}}',
//       eventDate: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
//       foodName: '{{firstName()}} {{surname()}}',
//       newsTitle: '{{firstName()}} {{surname()}}',
//       recipeTypes1:
//       [
//         {
//          ingredients: [
//         '{{repeat(5)}}',
//         '{{lorem(1, "words")}}'
//       ], 
//           recipeName: '{{firstName()}} {{surname()}}',
//           cookingMethos: '{{lorem(1, "paragraphs")}}',
//           rating: '{{floating(3, 5)}}'
//         }
//       ],
//       recipeTypes2:
//       [
//         {
//          ingredients: [
//         '{{repeat(5)}}',
//         '{{lorem(1, "words")}}'
//       ], 
//           recipeName: '{{firstName()}} {{surname()}}',
//           cookingMethos: '{{lorem(1, "paragraphs")}}',
//           rating: '{{floating(3, 5)}}'
//         }
//       ],
//       recipeTypes3:
//       [
//         {
//          ingredients: [
//         '{{repeat(5)}}',
//         '{{lorem(1, "words")}}'
//       ], 
//           recipeName: '{{firstName()}} {{surname()}}',
//           cookingMethos: '{{lorem(1, "paragraphs")}}',
//           rating: '{{floating(3, 5)}}'
//         }
//       ]
//     }
//   ]