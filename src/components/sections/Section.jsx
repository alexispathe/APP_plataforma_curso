import { useState, useContext, useEffect } from "react";
import "../../assets/styles/section.css";
import { CategoryContext } from "../../contexts/CategoryProvider"; //Importamos el contexto donde estan las secciones
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

      {categories && categories.length >= 1
        ? categories.map((category) => (
            <div className="section">
                <div className="category-image">
                    <img src={category.categoryInformation.image} alt={category.name}/>
                </div>
              <div className="category-title">{category.name}</div>
            </div>
          ))
        : ""}
    </div>
  );
};
