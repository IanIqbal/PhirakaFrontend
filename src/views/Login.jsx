import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [input, setInput] = useState({ Username: "", Password: "" })
    const navigate = useNavigate()
    function handleForm(e) {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    async function loginForm() {
        try {

            const { data } = await axios({
                url: "http://localhost:3000/login",
                method: "post",
                data: {
                    Username: input.Username,
                    Password: input.Password
                }
            })
            console.log(data);
            localStorage.setItem("access_token", data.access_token)
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }
    console.log(input);
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{ color: "#90EE90" }} > Login</h1>
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ backgroundColor: "#FED8B1", width: "800px", borderRadius: "5px" }}>
                    <div style={{ width: "10", padding: "20px" }}>

                        <form onSubmit={(e) => { e.preventDefault(); loginForm() }} >
                            <label style={{ backgroundColor: "#e7e7e7", borderRadius: "5px", padding: "5px" }}>Username</label>
                            <input style={{ width: "100%", marginBottom: "15px" }} type="text" name="Username" value={input.Username} onChange={handleForm} />
                            <label style={{ backgroundColor: "#e7e7e7", borderRadius: "5px", padding: "5px" }} > Password</label>
                            <input style={{ width: "100%" }} type="text" name="Password" value={input.Password} onChange={handleForm} />

                            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                                <button type="submit" >Login</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}