import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const ApiContext = createContext();



export const ApiContextProvider = ({ children }) => {

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/pizzas/${id}`);
    }

















    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

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
            setLoading(false);
            console.log("Finally");
        }
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <ApiContext.Provider value={{ data, handleClick, loading }}>
            {children}
        </ApiContext.Provider>
    );
}

export const useApi = () => useContext(ApiContext); 