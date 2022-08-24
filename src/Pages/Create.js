import { useState } from "react";

export default function Create() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [cover, setCover] = useState("");
    const [intro, setIntro] = useState("");
    const [completed, setCompleted] = useState(false);
    const [review, setReview] = useState("");

    // Decodificar o guardar una imagen de forma local:
    function handleOnChangeFile(e) {
        // Seleccionamos el input:
        const element = e.target;
        // Selecciono el archivo q se adjunto:
        const file = element.files[0];
        // Llamamos una api pa manipular archivos desde el navegador:
        const reader = new FileReader();

        // Aqui se indica como debe leer la image.
        reader.readAsDataURL(file);

        // Este evento se ejecuta una vez que la carga del archivo finalice
        reader.onloadend = function () {
            // Se guarda el archivo en el estado:
            setCover(reader.result.toString());
        }
    }

    // Almacena los valores de los inputs
    // Esta funcion maneja el estado de los inputs
    function handleChange(e) {
        // Se accede a la propiedad name del input
        const name = e.target.name;
        // Se almacena el valor del input
        const value = e.target.value;

        switch (name) {
            // Si el input es el title entonces hace:
            case "title":
                setTitle(value);
                break;
            case "author":
                setAuthor(value);
                break;
            case "intro":
                setIntro(value);
                break;
            case "completed":
                setCompleted(e.target.checked);
                break;
            case "review":
                setReview(value);
                break;

            default:
        }
    }

    // Evita recargar la pagina
    function handleSubmit(e) {
        e.preventDefault();

        // El boton submit creara un objeto que almacenara la informacion q se ingreso
        const newBook = {
            // Esto agrega un id
            id: crypto.randomUUID(),
            title: title,
            // Esto indica lo mismo que esta arriba, pero mas corto:
            author,
            cover,
            intro,
            completed,
            review,
        };
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>Title</div>
                    {/* Value hace referencia al valor inicial del input "un string vacio" */}
                    {/* Pa saber si se esta guardando en el estado podemos escribir alfinal de la etiqueta lo siguiente: {title} */}
                    <input type="text" name="title" onChange={handleChange} value={title} /> {title}
                </div>

                <div>
                    <div>Author</div>
                    <input type="text" name="author" onChange={handleChange} value={author} />
                </div>

                <div>
                    <div>Cover</div>
                    <input type="file" name="cover" onChange={handleOnChangeFile} />
                    <div>{!!cover ? <img src={cover} width="200px" alt="preview" /> : ""}</div>
                </div>

                <div>
                    <div>Introduction</div>
                    <input type="text" name="intro" onChange={handleChange} value={intro} />
                </div>

                <div>
                    <div>Completed</div>
                    <input type="checkbox" name="completed" onChange={handleChange} value={completed} />
                </div>

                <div>
                    <div>Review</div>
                    <input type="text" name="review" onChange={handleChange} value={review} />
                </div>
                <input type="submit" value="Register Book" />
            </form>
        </div>
    )
}