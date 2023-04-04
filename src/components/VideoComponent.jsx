/*
    -----------ESTE COMPONENTE SIRVE PARA RENDERIZAR UN VIDEO DE UN CANAL DE YOUTUBE----------
*/ 
import '../assets/styles/VideoComponent.css';
export const VideoComponent = ({ title, id }) => {
  return (
    <>
        <div className="video-responsive">
            <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
        </div>
    </>
  );
};
