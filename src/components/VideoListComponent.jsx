/*---------ESTE ES EL COMPONENTE PADRE PARA LOS VIDEOS, ES DECIR QUE AQUI DEBEOS DE PASAR LA LISTA DE TODOS LOS VIDEOS QUE VAMOS A RENDERIZAR------ */ 

import { useEffect,useState } from "react";
import { VideoComponent } from "./VideoComponent"; //Component que nos servira como render para cada video devuelto
import { Spinner } from "react-bootstrap";
import { VideoListDB } from "../assets/db/VideoListDB"; //Base de datos de los videos de youtube
export const VideoListComponent = () => {
    const [videoYT, setVideoYT] = useState([]); 
  
    //Con useEffect estamos mandando a llamar a la funcion getYoutubeVideos cuando el componente esta siendo llamado
  useEffect(() => {
    // getYoutubeVideosMethod2();
    getYoutubeVideos();
  }, []);
  
  //   const getYoutubeVideosMethod2 = () => {
  //     const canal = "UCGmdxSvMG8cGJXwifpiJFtA";
  //     const key = "AIzaSyB4YAWtDV6VhlwY1wR-cthG43kTQdmtt10";
  //     const url = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${canal}&key=${key}`;
  //     fetch(url, {
  //       method: "GET",
  //       Accept: "application/json",
  //       mode: "cors",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data)
  //         setVideoYTID(data.items);
  //       })
  //       .catch((err) => console.log(err));
  //   };
  const getYoutubeVideos = () => {
    /* LLamamos a la base de datos para guardar la informacion de cada elemento*/ 
    setVideoYT(VideoListDB);
  };
  return (
    <div>
      <h1>Lista de videos</h1>
      {
        videoYT && videoYT.length >= 1 ? (
          videoYT.map((video, i) => <VideoComponent key={i} data={video} />)
        ) : (
          <div className="w-100 text-center">
            <Spinner variant="primary" />
          </div>
        ) //El Spinner  se ejecuta cuando  los videos aun no se devuelven
      }
    </div>
  );
};
