/*
    -----------ESTE COMPONENTE SIRVE PARA RENDERIZAR CADA VIDEO QUE SE LE MANDE----------
*/
import "../assets/styles/VideoComponent.css";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
export const VideoComponent = ({ data }) => {
  const [idVideo, setIdVideo] = useState("");
  useEffect(() => {
    formatVideoURL();
  }, [data]);
  const formatVideoURL = () => {
    /*Dentro de esta funcion formatearemos la url del video de youtube para sacar solo el ID*/
    setIdVideo(data.url.split("?v=")[1]);
  };
  return (
    <>
      {idVideo && idVideo.length >= 1 ? (
        <div>
          <div className="video-responsive">
            <iframe
              width="570" 
              height="315"
              src={`https://www.youtube.com/embed/${idVideo}?rel=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={data.title}
             
            />
          </div>
          <div className="text-center">
            <p>{data.title}</p>
          </div>
        </div>
      ) : (
        <div className="w-100 text-center">
          <Spinner animation="grow" />
        </div>
      )}
    </>
  );
};
