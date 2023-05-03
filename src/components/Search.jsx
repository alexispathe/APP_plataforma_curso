/*---------ESTE ES EL COMPONENTE SIRVE COMO BUSCADOR DE CUALQUIER VIDEO DE ESTIC ------ */
import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { VideosContext } from "../contexts/VideosProvider";
import { VideoContainerComponent } from "./videoComponents/VideoContainer";

export const Search = ({title}) => {
  /* IMPORTAMOS EL CONTEXTO Y LO PASAMOS EN USECONTEXT */
  const [videoList, setVideoList] = useState([]);
  const [videosDB, setVideosDB] = useContext(VideosContext); //Como estamos trabajando con un estado en "VideosProvider" lo devolvemos
  const handleChange = (evt) => {
    /* Con esta funcion estamos capturando lo que se escribe dentro del formulario para luego hacer una comparacion y mostrar los videos que coencidan con los buscado*/
    const data = [];
    for (let video of videosDB) {
      if (
        video.title.toLowerCase().search(evt.target.value.toLowerCase()) >= 0
      ) {
        data.push(video);
      }
    }
    setVideoList(data);
  };
  return (
    <>
      <div className="">
        <h1 className="text-center">{title}</h1>
        <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
          <Form.Control
            type="search"
            placeholder="Buscar curso, conferencia, articulo..."
            className=""
            aria-label="Search"
            onChange={(e) => handleChange(e)}
          />
        </Form>
        {videoList && videoList.length >= 1 ? (
            <div>
                <p className="text-success pt-2">Se encontraron {videoList.length} resultados</p>
                <VideoContainerComponent videoList={videoList} sm={12} md={6} lg={4} /> {/*sm, md, lg = tamaño de la grid en bootstrap*/}
            </div>
        ) : (
            <p className="text-danger pt-2">No se encontro ningun resultado</p>
        )}
      </div>
    </>
  );
};
