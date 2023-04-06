/*
    -----------ESTE COMPONENTE SIRVE PARA RENDERIZAR UN VIDEO DE UN CANAL DE YOUTUBE----------
*/
import "../assets/styles/VideoComponent.css";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
export const VideoComponent = ({data}) => {
  const [idVideo, setIdVideo] = useState("");
  useEffect(() => {
    formatVideoURL();
  }, []);
  const formatVideoURL = () => {
    /*Dentro de esta funcion formatearemos la url del video de youtube para sacar solo el ID*/
    setIdVideo(data.url.split("?v=")[1]);
    
  };
  return (
    <>
      {idVideo && idVideo.length >= 10 ? (
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${idVideo}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      ) : <div className="w-100 text-center"><Spinner animation="grow"/></div>}
    </>
  );
};
