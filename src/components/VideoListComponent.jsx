import { useEffect } from "react";
import { VideoComponent } from "./VideoComponent"; //Component que nos servira como render para cada video devuelto
import {Spinner} from 'react-bootstrap'
export const VideoListComponent = ({ videoYTID, setVideoYTID }) => {
  //Con useEffect estamos mandando a llamar a la funcion getYoutubeVideos cuando el componente esta siendo llamado
  useEffect(() => {
    getYoutubeVideos();
  }, []);
  //Funcion que nos permitira devolver videos de un canal de youtube
  const getYoutubeVideos = () => {
    const canal = "UCGmdxSvMG8cGJXwifpiJFtA";
    const key = "AIzaSyB4YAWtDV6VhlwY1wR-cthG43kTQdmtt10";
    const url = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${canal}&key=${key}`;
    fetch(url, {
      method: "GET",
      Accept: "application/json",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setVideoYTID(data.items);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Lista de videos</h1>
      {videoYTID && videoYTID.length >= 1
        ? videoYTID.map((video, i) => (
            <VideoComponent key={i} id={video.id.videoId}/>
          ))
        : <div className="w-100 text-center"><Spinner variant="primary"/></div> //El Spinner  se ejecuta cuando  los videos aun no se devuelven
    }
    </div>
  );
};
