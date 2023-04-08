/*-----ESTE COMPONENTE SERVIRA PARA ALBERGAR EL COMPONENTE PARA REPRODUCIR EL VIDEO Y MOSTRAR LA LISTA DE TODOS LOS VIDEOS DE ESE CURSO*/
import { useEffect, useContext, useState } from "react";
import { VideosContext } from "../../contexts/VideosProvider";
import { useParams } from "react-router-dom"; //con esta funcion capturaremos los parametros que hay en la url, en este caso es :curso, :id
import { VideoListComponent } from "./VideoListComponent";
import { VideoComponent } from "./VideoComponent";
import '../../assets/styles/VideoPlayerComponent.css';
export const VideoPlayerComponent = () => {
  const [dbVideoList, setDBVideoList] = useContext(VideosContext); //Videos devueltos de la base de datos
  const [videoListSection, setVideoListSection] = useState([]); //Aqui almacenaremos la lista de videos que coencidan con el curso o seccion
  const [video, setVideo] = useState({});
  const { section, title } = useParams();
  useEffect(() => {
    getVideo(title);
    searchVideoSection(section);
  }, [title]);
  const searchVideoSection = (section) => {
    /*En esta funcion vamos a buscar la lista de todos los videos que coencidan con la seccion*/
    setVideoListSection([
      ...dbVideoList.filter(
        (video) => video.videoInformation.sectionID === section
      ),
    ]);
  };
  const getVideo = (title) => {
    /*En esta funcion vamos a buscar el video que el usuario va a reproducir*/
    setVideo(
      ...dbVideoList.filter(
        (video) => video.videoURL === title
      ),
    );
  };
  return (

    <div className="video-player-container">
      <VideoComponent data={video} width={"video-and-list-menu"}/>
      <VideoListComponent videoListSection={videoListSection} />
    </div>
  );
};
