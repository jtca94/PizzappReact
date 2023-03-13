import { createContext, useState, useEffect, useContext } from "react";

export const ApiContext = createContext();



export const ApiContextProvider = ({ children }) => {

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch("/pizzas.json");
            const data = await response.json();
            setData(data);
        }
        catch (error) {
            console.log(error);
        }

        finally {
            console.log("Finally");
        }
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <ApiContext.Provider value={{ data }}>
            {children}
        </ApiContext.Provider>
    );
}

export const useApi = () => useContext(ApiContext); 