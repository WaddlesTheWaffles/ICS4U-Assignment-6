import { useState, createContext, useContext } from "react";
import { Map } from 'immutable';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [accountList, setAccountList] = useState([]);
    const [genreList, setGenreList] = useState([]);
    const [currentEmail, setCurrentEmail] = useState("")
    const [cart, setCart] = useState(Map());

    return (
        <StoreContext.Provider value={{ accountList, setAccountList, genreList, setGenreList, currentEmail, setCurrentEmail, cart, setCart }}>
            {children}
        </StoreContext.Provider>
    );
}

export const useStoreContext = () => {
    return useContext(StoreContext);
}