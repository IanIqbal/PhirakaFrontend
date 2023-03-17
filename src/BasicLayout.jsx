import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

export default function BasicLayout(){

    return(
        <div  >
        <Navbar></Navbar>
        
        <Outlet></Outlet>
        </div>
    )
}