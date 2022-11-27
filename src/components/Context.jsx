import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AppContext = createContext();
const api = "https://api.imgflip.com/get_memes";

const AppProvider = ({ children }) => {
    const [allMemes, setAllMemes] = useState([]);
    const [loading, setLoading] = useState([false]);
    const fetchMemes = async (url) => {
        // TODO: render loading message
        try {
            const { data } = await axios.get(url);
            setAllMemes(data.data.memes);
        } catch (err) {
            console.log(err.response);
        }
    };

    useEffect(() => {
        fetchMemes(api);
    }, []);

    return (
        <AppContext.Provider value={{ allMemes }}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
