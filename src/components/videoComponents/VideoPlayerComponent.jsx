import { useEffect,useContext } from "react";
import { VideosContext } from "../../contexts/VideosProvider";
export const VideoPlayerComponent = () => {
    const [videoList, setVideoList] = useContext(VideosContext);
    useEffect(()=>{

    },[]); 
    const searchVideo=()=>{
        /*En esta funcion vamos a buscar el video que el usuario va a reproducir*/ 
    }
  return (
    <div className="video-player-component">
      <h1 className="video-title"></h1>
    </div>
  );
};
