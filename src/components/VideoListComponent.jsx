/*---------ESTE ES EL COMPONENTE PADRE PARA LOS VIDEOS, ES DECIR QUE AQUI DEBEOS DE PASAR LA LISTA DE TODOS LOS VIDEOS QUE VAMOS A RENDERIZAR------ */ 
import { VideoComponent } from "./VideoComponent"; //Component que nos servira como render para cada video devuelto
import { Spinner } from "react-bootstrap";
export const VideoListComponent = ({videoList}) => {
  return (
    <div>
      {
        videoList && videoList.length >= 1 ? (  
          videoList.map((video, i) => <VideoComponent key={i} data={video} />)
        ) : (
          <div className="w-100 text-center">
            <Spinner variant="primary" />
          </div>
        ) //El Spinner  se ejecuta cuando  los videos aun no se devuelven
      }
    </div>
  );
};
