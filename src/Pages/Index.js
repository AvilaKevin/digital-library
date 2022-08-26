import { useAppContext } from "../Store/store";
import Layout from "../Components/layout";
import Book from "../Components/book";

export default function Index() {
    // Se llama el context
    const store = useAppContext();

    return (
        <Layout>
            {/* // Para cada libro se crea un elemento*/}
            {/* Pa q react pueda identificar los elementos de un array se debe crear un key */}
            {store.items.map((item) => (
                <Book key={item.id} item={item}></Book>
            ))
            }
        </Layout>
    );
}