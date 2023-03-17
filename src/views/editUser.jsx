import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getSelectedUser } from "../store/actionUser"


export default function EditUser() {
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()
    const [input, setInput] = useState({ Username: "" })
    function handleForm(e) {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    console.log(input);
    async function editForm() {
        try {

            const { data } = await axios({
                url: `http://localhost:3000/users/${params.id}`,
                method: "put",
                headers: {
                    access_token: localStorage.getItem("access_token")
                },
                data: {
                    Username: input.Username
                }
            })
            console.log(data);
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    console.log(user);
    console.log(params);
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{ color: "#90EE90" }} > Edit user</h1>


            </div>


            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ backgroundColor: "#FED8B1", width: "800px", borderRadius: "5px" }} >
                    <div style={{ width: "10", padding: "20px" }}>
                        <div style={{display:"flex",justifyContent:"center"}} >
                            <p>Current Username: {user.Username}</p>
                        </div>
                        <form onSubmit={(e) => { e.preventDefault(); editForm() }} >
                            <div style={{ display: "flex", justifyContent: "center" }} >

                                <label style={{ backgroundColor: "#e7e7e7", borderRadius: "5px", padding: "5px" }} >Username</label>
                                <input style={{ marginLeft: "20PX" }} type="text" name="Username" placeholder={user.Username} value={input.Username} onChange={handleForm} />
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>

                                <button style={{ backgroundColor: "#90EE90", borderRadius: "5px", padding: "5px" }} type="submit" >Done</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}