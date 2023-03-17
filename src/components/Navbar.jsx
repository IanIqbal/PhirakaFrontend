import { NavLink, useNavigate } from "react-router-dom"


export default function Navbar() {
const navigate = useNavigate()
    return (

        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>

            <div style={{ backgroundColor: "#ADD8E6", width: "75%", borderRadius: "12px" }} >

                <ul style={{ listStyleType: "none", display: "flex" }} >
                    <li style={{ marginRight: 20 }} >
                        <NavLink style={{ textDecoration: "none" }} to="/adduser"> Add user</NavLink>

                    </li>

                    <li>
                        <NavLink style={{ textDecoration: "none" }} to="/"> Users</NavLink>

                    </li>
                    <li  >

                         <button  onClick={()=>{  localStorage.clear() ; navigate("/login") }} style={{marginLeft:1200, backgroundColor:"#FFA500", borderRadius:"5px"}}>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}