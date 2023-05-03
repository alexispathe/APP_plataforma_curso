import '../../assets/styles/SectionComponent.css';
import { useState, useContext, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap"; //Llamamos a las tarjetas y grid de bootstrap
import { CategoryContext } from "../../contexts/CategoryProvider"; //Importamos el contexto donde estan las secciones
import { Link } from "react-router-dom";
export const Section = ({ sectionType, name }) => {
  const [categoriesDB, setCategoriesDB] = useContext(CategoryContext);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    filterCategories(sectionType);
  }, []);
  const filterCategories = (sectionType) => {
    /*Esta funcion permitira hacer un filtro de cada uno de los curso o seccion donde coencida la propiedad categoryTypecon*/
    
    setCategories([
      ...categoriesDB.filter(
        (category) => category.sectionInformation.sectionType === sectionType
      ),
    ]);

  };
  return (
    <>
      {categories && categories.length >= 1? 

    <div className="section-container">
          <h1 className="text-center">{name}</h1>
          <Row className="">
             {categories.map((category) => (
                  <Col xs={12} sm={6} md={6} lg={4} xl={"auto"} className="card-container"   >
                    <Link to="" className="text-decoration-none">
                      <Card style={{ width: "100%" }}>
                        <Card.Img
                          variant="top"
                          src={category.categoryInformation.image}
                        />
                        <Card.Body>
                          <Card.Title className="text-center">{category.name}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))}
          </Row>
    </div>
          : ""}

    </>

  );
};
