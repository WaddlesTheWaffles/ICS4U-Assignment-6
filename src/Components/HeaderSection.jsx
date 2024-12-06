import "./HeaderSection.css";
import { useNavigate } from "react-router-dom";

function HeaderSection() {

    const navigate = useNavigate();

    return (
        <div className="toolbar" >
            <h1 className="inHeader" onClick={() => navigate('/')} ><span id="gold">Crowned</span> Pig</h1>
            <button onClick={() => navigate('/register')} className="inHeader" >Sign Up</button>
            <button onClick={() => navigate('/login')} className="inHeader" >Sign In</button>
        </div>
    )
}

export default HeaderSection