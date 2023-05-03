import { useEffect, useState } from "react";
import "../../assets/styles/VideoComponents.css";
import { Link } from "react-router-dom";

/*ESTE COMPONENTE SIRVE PARA MOSTRAR EL ULTIMO VIDEO VISTO POR EL USUARIO*/
export const WatchedVideoComponent = () => {
  const [videoInformation, setVideoInformation] = useState();
  useEffect(() => {
    getVideoInformation();
  }, []);
  const getVideoInformation = () => {
    // Con esta funcion estamos devolviendo el ultimo video visto por el usuario
    if(localStorage.getItem('watched-videos')){
        const data = JSON.parse(localStorage.getItem('watched-videos'));
        setVideoInformation(data[data.length -1]);
    };
  };

  return (
   <>
      {videoInformation ? (
        
        <div className="watched-video-container">
          <Link to={"/reproduciendo/"+videoInformation.videoInformation.sectionID+"/"+videoInformation.videoURL}>
              <div className="watched-video">
                <div className="video-image">
                  <img src="data:image/png;base64,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" />
                </div>
                <div className="video-information">
                  Seguir video <b>{videoInformation.title}</b>
                </div>
                
              </div>
          </Link>
          
            </div>
        
        ) : (
        ""
      )}
    
    </>
  );
};
