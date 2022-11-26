import { useContext, createContext } from "react";

const AppContext = createContext();
const api = "https://api.imgflip.com/";

const AppProvider = ({ children }) => {
    return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
