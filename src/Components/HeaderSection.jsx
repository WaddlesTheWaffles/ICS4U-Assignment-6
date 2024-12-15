import "./HeaderSection.css";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../context";

function HeaderSection() {

    const navigate = useNavigate();
    const { currentAccount } = useStoreContext();

    return (
        <div className="toolbar" >
            <h1 className="inHeader" onClick={() => navigate('/')} ><span id="gold">Crowned</span> Pig</h1>
            {Object.keys(currentAccount).length <= 0
                ? <div>
                    <button className="inHeader" onClick={() => navigate('/register')} >Sign Up</button>
                    <button className="inHeader" onClick={() => navigate('/login')} >Sign In</button>
                </div>
                : <div>
                    <button className="inHeader" onClick={() => alert('navigate to cart')} >Cart</button>
                    <button className="inHeader" onClick={() => navigate('/settings')} >Settings</button>
                    <button className="inHeader" onClick={() => alert('logout')} >Logout</button>
                </div>
            }
        </div>
    )
}

export default HeaderSection