/*
    -----------ESTE COMPONENTE SIRVE PARA RENDERIZAR CADA VIDEO QUE SE LE MANDE----------
*/
import "../../assets/styles/VideoComponents.css";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, json } from "react-router-dom";
export const VideoComponent = ({ data, width }) => {
  const [idVideo, setIdVideo] = useState("");
  useEffect(() => {
    formatVideoURL();
    saveWathedVideos();
  }, [data]);
  const formatVideoURL = () => {
    /*Dentro de esta funcion formatearemos la url del video de youtube para sacar solo el ID*/
    if (data.url) {
      setIdVideo(data.url.split("?v=")[1]);
    }
  };
  const saveWathedVideos = () => {
    /*Esta funcion servira para guardar un historial de los videos que el usuario ha visto*/
    if (localStorage.getItem("watched-videos") && data.videoURL) {
      const watchedVideos = JSON.parse(localStorage.getItem("watched-videos"));
      // buscamos que el video no este agregado previamente en el localstorage, si es asi devolvemos una lista de todos los videos menos ese para agregarlo al ultimo de la lista
      const newVideo = watchedVideos.filter(
        (video) => video.videoURL !== data.videoURL
      );
      newVideo.push(data);
      localStorage.setItem("watched-videos", JSON.stringify(newVideo));
    } else if (!localStorage.getItem("watched-videos") && data.videoURL) {
      const videoPlayed = [];
      videoPlayed.push(data);
      localStorage.setItem("watched-videos", JSON.stringify(videoPlayed));
    }
  };
  return (
    <>
      {idVideo && idVideo.length >= 1 ? (
        <div className={width}>
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
            <Link
              to={
                "/reproduciendo/" +
                data.videoInformation.sectionID +
                "/" +
                data.videoURL
              }
            >
              {data.title}
            </Link>
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
