import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Components/layout";
import { useAppContext } from "../Store/store";

export default function View() {
    // Se crea un estado en donde se almacena el libro.
    const [item, setItem] = useState(null)
    // Se llama un elemento de la libreria router q da acceso a la informacion de la ruta anterior
    // regresa los parametros identificados en la ruta como bookId
    const params = useParams();
    const store = useAppContext();

    useEffect(() => {
        //Se carga el libro dependiendo del id 
        const book = store.getItem(params.bookId);
        setItem(book);
    }, []);

    // Si es null entonces devuelve el div:
    if (!item) {
        return <Layout>Item not Found</Layout>;
    }

    // una vez validado el item se procede a mostrar los datos del mismo:
    return (
        <Layout>
            {/* // Se realiza una validacion de cada componente con los operadores especiales
            // EJE: SI item es true entonces, devuelva title */}
            <h2>{item?.title}</h2>
            <div>{item?.cover ? <img src={item.cover} width="400px" alt={item.title} /> : ""}</div>
            <div>{item?.author}</div>
            <div>{item?.intro}</div>
            <div>{item?.completed ? "Leido" : "Por terminar"}</div>
            <div>{item?.review}</div>
        </Layout>
    )
}