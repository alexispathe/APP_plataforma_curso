/*---------ESTE ES EL COMPONENTE PADRE PARA LOS VIDEOS, ES DECIR QUE AQUI DEBEOS DE PASAR LA LISTA DE TODOS LOS VIDEOS QUE VAMOS A RENDERIZAR------ */
import { VideoComponent } from "./Video"; //Component que nos servira como render para cada video devuelto
import { Spinner } from "react-bootstrap";
import { Row, Col } from "react-bootstrap"; //Importamos estas librerias para trabajar con la "GRID" de bootstrap"
export const VideoContainerComponent = ({ videoList,sm,md,lg }) => {
  return (
    <Row>
      {
        videoList && videoList.length >= 1 ? (
          videoList.map((video, i) => (
            <Col sm={sm} md={md} lg={lg} key={i} >
              <VideoComponent data={video} />
            </Col>
          ))
        ) : (
          <div className="w-100 text-center">
            <Spinner variant="primary" />
          </div>
        ) //El Spinner  se ejecuta cuando  los videos aun no se devuelven
      }
    </Row>
  );
};
