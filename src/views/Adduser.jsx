import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Adduser() {
    const [input, setInput] = useState({ Username: "", Password: "" })
    const navigate = useNavigate()
    function handleForm(e) {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    console.log(input);
    async function addForm() {
        try {

            const { data } = await axios({
                url: "http://localhost:3000/register",
                method: "post",
                headers: {
                    access_token: localStorage.getItem("access_token")
                },
                data: {
                    Username: input.Username,
                    Password: input.Password
                }
            })
            console.log(data);
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div  >
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{ color: "#90EE90" }} >Add user</h1>

            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ backgroundColor: "#FED8B1", width: "800px", borderRadius:"5px" }} >
                    <div style={{width:"10", padding:"20px"}} >  
                        <form onSubmit={(e) => { e.preventDefault(); addForm() }} >

                            <label style={{ backgroundColor: "#e7e7e7", borderRadius: "5px", padding: "5px" }} >Username</label>
                            <input style={{ width: "100%", marginBottom: "15px" }} type="text" name="Username" onChange={handleForm} />


                            <label style={{ backgroundColor: "#e7e7e7", borderRadius: "5px", padding: "5px" }} > Password</label>
                            <input style={{ width: "100%" }} type="text" name="Password" onChange={handleForm} />
                            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }} >

                                <button style={{ backgroundColor: "#90EE90", borderRadius: "5px", padding: "5px" }} type="submit" >Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}