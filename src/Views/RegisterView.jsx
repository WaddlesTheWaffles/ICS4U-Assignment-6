import "./RegisterView.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../context";
import HeaderSection from "../Components/HeaderSection";

function RegisterView() {

    const navigate = useNavigate();
    const { genreList, setGenreList } = useStoreContext();
    const { accountList, setAccountList } = useStoreContext();

    const totalGenreList = [
        { "genreName": "Action", "id": 28 },
        { "genreName": "Adventure", "id": 12 },
        { "genreName": "Animation", "id": 16 },
        { "genreName": "Comedy", "id": 35 },
        { "genreName": "Crime", "id": 80 },
        { "genreName": "Family", "id": 10751 },
        { "genreName": "Fantasy", "id": 14 },
        { "genreName": "History", "id": 36 },
        { "genreName": "Horror", "id": 27 },
        { "genreName": "Music", "id": 10402 },
        { "genreName": "Mystery", "id": 9648 },
        { "genreName": "Sci-Fi", "id": 878 },
        { "genreName": "Thriller", "id": 53 },
        { "genreName": "War", "id": 10752 },
        { "genreName": "Western", "id": 37 }
    ];
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [chosenGenreList, setChosenGenreList] = useState([]);

    function submitForm() {

        if (rePasswordCheck()) {
            if (chosenGenreList.length < 10) {
                alert('Please select minimum 10 genres');
            } else {
                setGenreList(chosenGenreList);
                setAccountList(prevList => { //Creates an object filled with info and adds it the to account list

                    return [...prevList, {
                        email: email,
                        password: password,
                        firstName: firstName,
                        lastName: lastName
                    }]
                })
                navigate('/login');
            }
        } else {
            alert('Passwords are not the same');
        }
    }

    function rePasswordCheck() {
        if (rePassword === password) {
            return true
        } else {
            return false
        }
    }

    function renderCheckBoxes() {
        return totalGenreList.map((genre) => (
            <div key={genre.id} className="checkBoxLabelPair">
                <label htmlFor={(genre.genreName).toLowerCase() + "Genre"} >{genre.genreName}</label>
                <input type="checkbox" id={(genre.genreName).toLowerCase() + "Genre"} onChange={(event) => { event.target.checked ? addGenreToList(genre) : removeGenreFromList(genre) }} />
            </div>
        ))
    }

    function addGenreToList(genreObject) {
        setChosenGenreList(prevList => {
            if (prevList.find(item => item.genreName === genreObject.genreName)) {
                alert('Genre has already been added to the list');
                return prevList;
            }
            return [...prevList, genreObject];
        });
    }

    function removeGenreFromList(genreObject) {
        setChosenGenreList(prevList => {
            if (!prevList.find(item => item.genreName === genreObject.genreName)) {
                alert('Genre is not in the list');
                return prevList;
            }
            return prevList.filter(item => item.genreName !== genreObject.genreName);
        });
    }

    return (
        <div>
            <HeaderSection />
            <div className="formContainerReg">
                <h1 className="formTitleReg">Register</h1>
                <form className="formReg" onSubmit={() => { event.preventDefault(); submitForm() }} >
                    <label className="boxLabelsReg" htmlFor="firstNameInfoBox" >First Name:</label>
                    <input required className="infoBoxesReg" id="firstNameInfoBox" type="text" value={firstName} onChange={(event) => { setFirstName(String(event.target.value)) }} />
                    <label className="boxLabelsReg" htmlFor="lastNameInfoBox" >Last Name:</label>
                    <input required className="infoBoxesReg" id="lastNameInfoBox" type="text" value={lastName} onChange={(event) => { setLastName(String(event.target.value)) }} />
                    <label className="boxLabelsReg" htmlFor="emailInfoBox" >Email:</label>
                    <input required className="infoBoxesReg" id="emailInfoBox" type="text" value={email} onChange={(event) => { setEmail(String(event.target.value)) }} />
                    <label className="boxLabelsReg" htmlFor="passwordInfoBox" >Pasword:</label>
                    <input required className="infoBoxesReg" id="passwordInfoBox" type="password" value={password} onChange={(event) => { setPassword(String(event.target.value)) }} />
                    <label className="boxLabelsReg" htmlFor="rePasswordInfoBox" >Re-enter Password:</label>
                    <input required className="infoBoxesReg" id="rePasswordInfoBox" type="password" value={rePassword} onChange={(event) => { setRePassword(String(event.target.value)) }} />

                    <div className="genreCheckList">
                        {renderCheckBoxes()}
                    </div>

                    <input className="registerButtonReg" type="submit" value={"Register"} />
                </form>
            </div>
        </div>
    )
}

export default RegisterView