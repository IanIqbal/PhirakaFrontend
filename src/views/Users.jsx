import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSelectedUser, getUser } from "../store/actionUser"

import axios from "axios"
import { NavLink, redirect, useNavigate } from "react-router-dom"

export default function Users() {
    const dispatch = useDispatch()
    // const user = useSelector((state) => state.user)
    const navigate = useNavigate()
    const users = useSelector((state) => state.users)
    const deleteAction = async (id) => {
        try {
            const { data } = await axios({
                url: `http://localhost:3000/users/${id}`,
                headers: {
                    access_token: localStorage.getItem("access_token")
                },
                method: "delete",
            })
            dispatch(getUser())

            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        dispatch(getUser())
    }, [])
    console.log(users.users);
    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:"40px"}}>
            <table style={{border:1, borderStyle:"solid", backgroundColor:"#FFFFE0" }} >
                <tr >
                    <th>
                        No
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Password
                    </th>
                    <th>
                        Created Time
                    </th>
                    <th>
                        Function
                    </th>

                </tr>

                {users.users ? users.users.map((el, index) => {
                    return (
                        <>
                            <tr>
                                <td style={{borderStyle:"solid", border:1}} > {index+1}</td>
                                <td> {el.Username} </td>
                                <td> {el.Password} </td>
                                <td> {el.createdAt.substr(0,10)} </td>
                                <td> 
                        
                                <button style={{backgroundColor:"#90EE90", borderRadius:"12px"}}  onClick={ ()=> { dispatch(getSelectedUser(el.id));  navigate(`/edituser/${el.id}`)} }  >Edit</button> 
                                <button style={{backgroundColor:"#FFCCCB", borderRadius:"12px"}} onClick={() => { deleteAction(el.id) }}  >delete</button> 
                                </td>


                            </tr>
                        </>
                    )

                }) : null}

            </table>
        </div>
    )
}