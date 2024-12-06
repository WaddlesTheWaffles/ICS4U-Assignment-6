import "./LoginView.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import HeaderSection from "../Components/HeaderSection"

function LoginView() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const adminEmail = "admin@gmail.com";
    const adminPassword = "password1234";

    function loginInfoCheck() {

        if ((email == adminEmail) && (password == adminPassword)) {
            return true
        } else {
            return false
        }
    }

    return (
        <div>
            <HeaderSection />
            <div className="formContainerLog">
                <h1 className="formTitleLog" >Login</h1>
                <form className="formLog" onSubmit={() => loginInfoCheck() ? navigate('/movies') : alert('Password is incorrect')}>
                    <label className="boxLabelsLog">Email:</label>
                    <input required className="infoBoxesLog" type="text" value={email} onChange={(event) => { setEmail(String(event.target.value)) }} />
                    <label className="boxLabelsLog">Password:</label>
                    <input required className="infoBoxesLog" type="password" value={password} onChange={(event) => { setPassword(String(event.target.value)) }} />

                    <input className="loginButtonLog" type="submit" value={"Login"} />
                </form>
            </div>
        </div>
    )
}

export default LoginView