/*--------------ESTE COMPONENTE SIRVE PARA MOSTRAR LA LISTA DE LOS VIDEOS DE UN CURSO O SECCION--------------*/
import { useEffect, useContext, useState } from "react";
import { VideosContext } from "../../contexts/VideosProvider";
import { Link, NavLink } from "react-router-dom";
import "../../assets/styles/VideoListComponent.css";
import { ImPlay2 } from "react-icons/im";
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
        {list.map((list, i) => (
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
        ))}
      </ul>
    </div>
  );
};
