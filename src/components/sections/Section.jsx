import "../../assets/styles/SectionComponent.css";
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
      {categories && categories.length >= 1 ? (
        <div className="section-container">
          <h1 className="text-center">{name}</h1>
          <div className="card-container d-flex overflow-auto w-100 ">
            {categories.map((category) => (
              <div className="m-2" >
                <Card  className="card-item">
                <Link to="" className="text-decoration-none">
                  <div className="overflow-hidden" style={{width: '300px', height: "150px" }}>
                    <Card.Img
                      variant="top"
                      src={category.categoryInformation.image}
                    />
                  </div>
                  
                  <Card.Body>
                    <Card.Title className="text-center">
                      {category.name}
                    </Card.Title>
                  </Card.Body>
                </Link>
              </Card>
                </div>
              
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
