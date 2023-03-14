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
            setOpen(true);
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
            setOpen(true);
            setCart((prev) => {
                return [...prev, { id, cantidad: 1 }];
            });
        }

    }

    // eliminar del carrito
    const handleRemoveItem = (id) => {
        const item = cart.find((item) => item.id === id);
        // si la cantidad es mayor a 1, le resta 1 a la cantidad
        if (item.cantidad > 1) {
            setCart((prev) => {
                return prev.map((item) => {
                    // si el id del item es igual al id del item que se esta recorriendo, le resta 1 a la cantidad
                    if (item.id === id) {
                        return { ...item, cantidad: item.cantidad - 1 };
                    }
                    return item;
                });
            });
        }
        // si la cantidad es 1, lo elimina del carrito
        else {
            setCart((prev) => {
                return prev.filter((item) => item.id !== id);
            });
        }
    }



    // total del carrito
    const [cartTotal, setCartTotal] = useState(0);
    
    // puede servir para mostrarlo en el navbar
    useEffect(() => {
        let total = 0;
        cart.forEach((item) => {
            total += item.id.price * item.cantidad;
        });
        setCartTotal(total);
    }, [cart]);


    // snackbar
    const [open, setOpen] = useState(false);
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    // logica del badge
    const [badgeCuanty, setBadgeCuanty] = useState(0)

    // contador de pizzas en el carrito para el badge del icono nav
    useEffect(() => {
        let cuanty = 0
        cart.forEach((pizza) => {
            cuanty += pizza.cantidad
        })
        setBadgeCuanty(cuanty)
    }, [cart])










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
        <ApiContext.Provider value={{   data, 
                                        handleClick, 
                                        loading, 
                                        handleClickBack, 
                                        handleClickAdd, 
                                        cart, 
                                        handleRemoveItem, 
                                        handleClose, 
                                        open, 
                                        setBadgeCuanty,
                                        badgeCuanty,
                                        cartTotal
                                         }}>
            {children}
        </ApiContext.Provider>
    );
}

export const useApi = () => useContext(ApiContext); 