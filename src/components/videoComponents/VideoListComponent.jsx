/*--------------ESTE COMPONENTE SIRVE PARA MOSTRAR LA LISTA DE LOS VIDEOS DE UN CURSO O SECCION--------------*/

import {NavLink } from "react-router-dom"; //Con NavLink agreamos funcionalidades extras al hipervinculo
import {Spinner} from 'react-bootstrap';
import "../../assets/styles/VideoListComponent.css";
export const VideoListComponent = ({ videoListSection }) => {
  return (
    <div className="video-list-container">
      <ul className="video-list">
        {videoListSection && videoListSection.length>=1 ? videoListSection.map((videoList, i) => (
          <li key={videoList.videoURL || i}>
            <NavLink
              to={
                "/reproduciendo/" +
                videoList.videoInformation.sectionID +
                "/" +
                videoList.videoURL
              }
              className={({ isActive}) =>
                isActive ? "active-link" : ""
              }
            >
              {i + 1}. {videoList.title}
            </NavLink>
          </li>
        )): <div className="w-100 mt-5 text-center text-primary">
        <Spinner animation="border" />
      </div>}
      </ul>
    </div>
  );
};
