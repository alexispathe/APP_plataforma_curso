/*
    -----------ESTE COMPONENTE SIRVE PARA RENDERIZAR UN VIDEO DE UN CANAL DE YOUTUBE----------
    -------TAMBIEN SE APLICAN ESTILOS DE BOOTSTRAP----------------------
*/ 
import {Card, Button} from 'react-bootstrap';
import '../assets/styles/VideoComponent.css';
export const VideoComponent = ({ title, id }) => {
  return (
    <>
     <Card style={{ width: '20rem' }}>
     <Card.Title className='text-center'>{title}</Card.Title>
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
    </Card>
    </>
  );
};
