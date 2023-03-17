
import { createBrowserRouter , redirect} from "react-router-dom";
import BasicLayout from "../BasicLayout"
import Adduser from "../views/Adduser";
import EditUser from "../views/editUser";
import Login from "../views/Login";
import Users from "../views/Users";

const router = createBrowserRouter([
    {
        element:<BasicLayout></BasicLayout>,
        loader:()=>{
            if(!localStorage.getItem("access_token")){
                return redirect("/login")
            }

            return null
        },
        children:[
            {   
                path:"/",
                element:<Users></Users>

            },
            {
                path:"/adduser",
                element:<Adduser></Adduser>
            },
            {
                path:"/edituser/:id",
                element:<EditUser></EditUser>
            }
        ]
    },
    {
        path:"/login",
        loader:()=>{
            if(localStorage.getItem("access_token")){
                return redirect("/")
            }

            return null
        },
        element:<Login></Login>
    }
 
])

export default router