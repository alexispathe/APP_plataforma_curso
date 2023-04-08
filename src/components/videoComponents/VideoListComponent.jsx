/*--------------ESTE COMPONENTE SIRVE PARA MOSTRAR LA LISTA DE LOS VIDEOS DE UN CURSO O SECCION--------------*/
import { useEffect, useContext, useState } from "react";
import { VideosContext } from "../../contexts/VideosProvider";
import {NavLink } from "react-router-dom"; //Con NavLink agreamos funcionalidades extras al hipervinculo
import {Spinner} from 'react-bootstrap';
import "../../assets/styles/VideoListComponent.css";
export const VideoListComponent = ({ section }) => {
  const [videoList, setVideoList] = useContext(VideosContext);
  const [list, setList] = useState([]); //Aqui almacenaremos la lista de videos que coencidan con el curso o seccion
  useEffect(() => {
    searchVideo(section);
  }, []);
  const searchVideo = (section) => {
    /*En esta funcion vamos a buscar el video que el usuario va a reproducir*/
    setList([
      ...videoList.filter(
        (video) => video.videoInformation.sectionID === section
      ),
    ]);
  };

  return (
    <div className="video-list-container">
      <ul className="video-list">
        {list && list.length>=1 ? list.map((list, i) => (
          <li key={list.videoURL || i}>
            <NavLink
              to={
                "/reproduciendo/" +
                list.videoInformation.sectionID +
                "/" +
                list.videoURL
              }
              className={({ isActive}) =>
                isActive ? "active-link" : ""
              }
            >
              {i + 1}. {list.title}
            </NavLink>
          </li>
        )): <div className="w-100 mt-5 text-center text-primary">
        <Spinner animation="border" />
      </div>}
      </ul>
    </div>
  );
};
