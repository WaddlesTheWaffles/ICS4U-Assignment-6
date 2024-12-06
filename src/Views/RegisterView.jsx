import "./RegisterView.css"
import { useState } from "react"
import HeaderSection from "../Components/HeaderSection";

function RegisterView() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    function rePasswordCheck() { //checks if the re-Entered password is the same
        if (rePassword == password) {
            return true
        } else {
            return false
        }
    }

    return (
        <div>
            <HeaderSection />
            <div className="formContainerReg">
                <h1 className="formTitleReg">Register</h1>
                <form className="formReg" onSubmit={() => rePasswordCheck()?alert('Unavailable'):alert('Passwords are not the same')} >
                    <label className="boxLabelsReg" >First Name:</label>
                    <input required className="infoBoxesReg" type="text" value={firstName} onChange={(event) => { setFirstName(String(event.target.value)) }} />
                    <label className="boxLabelsReg" >Last Name:</label>
                    <input required className="infoBoxesReg" type="text" value={lastName} onChange={(event) => { setLastName(String(event.target.value)) }} />
                    <label className="boxLabelsReg" >Email:</label>
                    <input required className="infoBoxesReg" type="text" value={email} onChange={(event) => { setEmail(String(event.target.value)) }} />
                    <label className="boxLabelsReg" >Pasword:</label>
                    <input required className="infoBoxesReg" type="password" value={password} onChange={(event) => { setPassword(String(event.target.value)) }} />
                    <label className="boxLabelsReg" >Re-enter Password:</label>
                    <input required className="infoBoxesReg" type="password" value={rePassword} onChange={(event) => { setRePassword(String(event.target.value)) }} />

                    <input className="registerButtonReg" type="submit" value={"Register"} />
                </form>
            </div>
        </div>
    )
}

export default RegisterView