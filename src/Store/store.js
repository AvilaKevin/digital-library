import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorege";
// 2:57

// Se crea el context con un objeto como propiedad:
const AppContext = createContext({
    items: [],
    createItem: (item) => { },
    getItem: (id) => { },
    updateItem: (item) => { },
});

// Se crea un componente contenedor el cual maneja la implementacion de los metodos
export default function Store({ children }) {
    const [items, setItems] = useState([]);

    // Crea un nuevo item y lo guarda
    function createItem(item) {
        const temp = [...items];
        temp.push(item);

        setItems(temp);
    }

    // Busca un item segun el ID
    function getItem(id) {
        const item = items.find((item) => item.id === id);

        return item;
    }

    //Actualiza un inte segun el ID
    function updateItem(item) {
        const index = items.find((i) => i.id === item.id);
        const temp = [...items];

        temp[index] = { ...item };
    }

    return (
        // En el provider se indica cuales son las propiedades que se van a pasar
        <AppContext.Provider
            value={{
                items,
                createItem,
                getItem,
                updateItem,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

// Se creo un Custom hook
export function useAppContext() {
    // Aqui se indico cual context se importa
    return useContext(AppContext);
}