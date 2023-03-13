import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const ApiContext = createContext();



export const ApiContextProvider = ({ children }) => {
    // navegacion entre paginas
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/pizzas/${id}`);
    }
    const handleClickBack = () => {
        navigate(`/pizzas`);
    }


    // carrito, recibe objetos, conteniendo id, precio y cantidad
    const [cart, setCart] = useState([]);
    
    // agregar al carrito, aca en el id estoy pasando el objeto completo de la pizza con sus parametros mas otro objeto con la cantidad
    const handleClickAdd = (id) => {
        const item = cart.find((item) => item.id === id);
        // agregar cantidad al item si ya existe en el carrito
        if (item) {
            setCart((prev) => {
                return prev.map((item) => {
                    // si el id del item es igual al id del item que se esta recorriendo, le suma 1 a la cantidad
                    if (item.id === id) {
                        return { ...item, cantidad: item.cantidad + 1 };
                    }
                    return item;
                });
            });
        }
        // si no existe el item en el carrito, lo agrega
        else {
            setCart((prev) => {
                return [...prev, { id, cantidad: 1 }];
            });
        }

    }
















    // consumo api
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
        <ApiContext.Provider value={{ data, handleClick, loading, handleClickBack, handleClickAdd, cart }}>
            {children}
        </ApiContext.Provider>
    );
}

export const useApi = () => useContext(ApiContext); 