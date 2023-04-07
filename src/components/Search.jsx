/*---------ESTE ES EL COMPONENTE SIRVE COMO BUSCADOR DE CUALQUIER VIDEO DE ESTIC ------ */ 
import { useContext, useState } from 'react';
import {Form} from 'react-bootstrap';
import { VideosContext } from '../contexts/VideosProvider';
import { VideoListComponent } from './VideoListComponent';
export const Search =()=>{
    /* IMPORTAMOS EL CONTEXTO Y LO PASAMOS EN USECONTEXT */
    const [videoList, setVideoList] = useState([]);
    const [videosDB, setVideosDB] = useContext(VideosContext); //Como estamos trabajando con un estado en "VideosProvider" lo devolvemos
    const handleChange=(evt)=>{
        /* Con esta funcion estamos capturando lo que se escribe dentro del formulario para luego hacer una comparacion y mostrar los videos que coencidan con los buscado*/
        const data = [];
        for(let video of videosDB){
            if(video.title.toLowerCase().search(evt.target.value.toLowerCase())>=0){
                data.push(video)
            }
        }
        setVideoList(data);
    }
    return(
        <>
        <div className="container">
            <Form className="d-flex"  onSubmit={(e)=>e.preventDefault()}>
                    <Form.Control
                        type="search"
                        placeholder="¿Qué estás buscando?"
                        className=""
                        aria-label="Search"
                        onChange={(e) => handleChange(e)}
                    />
                </Form>
            {videoList.length>=1?<VideoListComponent videoList={videoList}/>: ''}
        </div>
        </>
    );
}