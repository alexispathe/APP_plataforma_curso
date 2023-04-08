/*-----ESTE COMPONENTE SERVIRA PARA ALBERGAR EL COMPONENTE PARA REPRODUCIR EL VIDEO Y MOSTRAR LA LISTA DE TODOS LOS VIDEOS DE ESE CURSO*/ 
import { useParams } from "react-router-dom"; //con esta funcion capturaremos los parametros que hay en la url, en este caso es :curso, :id
import { VideoListComponent } from "./VideoListComponent";
export const VideoPlayerComponent = () => {
    const {section, title} = useParams(); 

  return (
    <div className="video-player-component">
      <VideoListComponent section={section}/>
    </div>
  );
};
