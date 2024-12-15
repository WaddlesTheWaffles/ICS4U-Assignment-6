import "./LoginView.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../context";
import HeaderSection from "../Components/HeaderSection";

function LoginView() {
    const navigate = useNavigate();
    const { accountList, setAccountList } = useStoreContext();
    const { currentAccount, setCurrentAccount } = useStoreContext()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateInfo() {
        if (accountList.length <= 0) { //Checks if any account has been created
            alert('There are no accounts created')

        } else if (accountList.find(account => account.email === email)) { //Checks if the email exist inside the list
            const accountIndex = accountList.findIndex(account => account.email === email)
            if ((email === accountList[accountIndex].email) && (password === accountList[accountIndex].password)) {
                setCurrentAccount(accountList[accountIndex]);
                navigate('/movies')

            } else {
                alert('Password is incorrect');
            }
        } else {
            alert('There is no account connected to this email')
        }
    }

    return (
        <div>
            <HeaderSection />
            <div className="formContainerLog">
                <h1 className="formTitleLog" >Login</h1>
                <form className="formLog" onSubmit={() => { event.preventDefault(); validateInfo() }}>
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