import { useState, useContext, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap"; //Llamamos a las tarjetas y grid de bootstrap
import { CategoryContext } from "../../contexts/CategoryProvider"; //Importamos el contexto donde estan las secciones
import { Link } from "react-router-dom";
// import '../../assets/styles/SectionComponent.css';
export const Section = ({ categoryType }) => {
  const [categoriesDB, setCategoriesDB] = useContext(CategoryContext);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // console.log(categoryType)
    filterCategories(categoryType);
  }, []);
  const filterCategories = (categoryType) => {
    /*Esta funcion permitira hacer un filtro de cada uno de los curso o seccion donde coencida la propiedad categoryTypecon*/
    setCategories([
      ...categoriesDB.filter(
        (category) => category.categoryInformation.categoryType === categoryType
      ),
    ]);
  };
  return (
    <div className="section-container">
      <h1 className="text-center">Tecnologia </h1>
      <Row className="">
        {categories && categories.length >= 1
          ? categories.map((category) => (
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
            ))
          : ""}
      </Row>
    </div>
  );
};
