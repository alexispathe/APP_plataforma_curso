/*---------ESTE ES EL COMPONENTE SIRVE COMO BUSCADOR DE CUALQUIER VIDEO DE ESTIC ------ */ 
import { useContext } from 'react';
import {Form} from 'react-bootstrap';
import { VideosContext } from '../contexts/VideosProvider';
export const Search =()=>{
    /* IMPORTAMOS EL CONTEXTO Y LO PASAMOS EN USECONTEXT */
    const [videosDB, setVideosDB] = useContext(VideosContext); //Como estamos trabajando con un estado en "VideosProvider" lo devolvemos
    const handleChange=(evt)=>{
        /* Con esta funcion estamos capturando lo que se escribe dentro del formulario*/
        console.log(evt.target.value);
        console.log(videosDB)
    }
    return(
        <>
        <div className="container" onSubmit={(e)=>e.preventDefault()}>
            <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="¿Qué estás buscando?"
                        className=""
                        aria-label="Search"
                        onChange={(e) => handleChange(e)}
                    />
                </Form>
        </div>
        </>
    );
}