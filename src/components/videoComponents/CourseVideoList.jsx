import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { VideosContext } from "../../contexts/VideosProvider";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
export const CourseVideoList = () => {
  const [videoListSection, setVideoListSection] = useContext(VideosContext);
  const [videoList, setVideoList] = useState([]);
  const { course } = useParams(); //capturamos el parametro de la URL llamado course
  useEffect(() => {
    compareVideos(course);
  }, [course]);
  const compareVideos = (id) => {
    /*Esta funcion sirve para devolver los videos del curso solicitado mediante el parametro 'course'*/
    setVideoList(
      videoListSection.filter(
        (video) => video.videoInformation.categoryID === id
      )
    );
  };
  return (
    <>
      <div className="course-video-list-container">
        <ul className="course-video-list">
          <Row>
            {videoList && videoList.length >= 1 ? (
              videoList.map((videoList, i) => (
                <Col ms={12} md={6} lg={6}  xl={4} key={videoList.videoURL || i}>
                  <li >
                    <Link
                      to={
                        "/reproduciendo/" +
                        videoList.videoInformation.sectionID +
                        "/" +
                        videoList.videoURL
                      }
                    >
                      {i + 1}. {videoList.title}
                    </Link>
                  </li>
                </Col>
              ))
            ) : (
              <div className="w-100 mt-5 text-center text-primary">
                <Spinner animation="border" />
              </div>
            )}
          </Row>
        </ul>
      </div>
    </>
  );
};
