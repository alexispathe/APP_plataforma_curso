import { useState, useEffect } from "react";
import { sectionsDB } from "../assets/db/sectionsDB";
import { categoriesDB } from "../assets/db/categoriesDB";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";
import {Spinner} from 'react-bootstrap';
import {IoIosArrowDown} from 'react-icons/io'
export const Header = () => {
  const [sections, setSections] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setSections(sectionsDB);
    setCategories(categoriesDB);
  }, []);
  return (
    <>
      <div className="header-container">
        <div className="header">
          <div className="header-top">
            <div className="header-logo">
              <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/934px-Twitter-logo.svg.png" />
              </Link>
            </div>

            <div className="header-down">
              {sections && sections.length >= 1 ? (
                <div className="header-section-container">
                  <ul className="header-section">
                    {//Aqui estamos devolviendo todas las secciones de nuestra base de datos
                    sections.map((section, i) => (
                      <li className="header-section-item" key={section.sectionID || i}>
                        <Link to={"/seccion/"+section.sectionURL} className="header-section-item-a">{section.name} <IoIosArrowDown/></Link>
                        <ul className="h-s-sub-item-container" >
                            {categories.length >=1? //Aqui estamos devolviendo todas categorias de BD para luego compararlos mediante su 'sectionID' y hacer una relacion 
                                categories.map((category, j)=>(
                                    category.sectionID ===  section.sectionID ? 
                                    <li className="h-s-sub-item" key={category.categoryID || j}><Link to={"/seccion/"+ section.sectionURL+ "/"+category.categoryURL}>{category.name}</Link></li>
                                    :''
                                )):<div className="text-center"><Spinner animation="border" className="text-white" /></div>

                            }                               
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="text-center pt-5"><Spinner animation="border" className="text-white" /></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};