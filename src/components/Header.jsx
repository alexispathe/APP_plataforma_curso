import { useState, useEffect } from "react";
import { sectionsDB } from "../assets/database/sectionsDB";
import { categoriesDB } from "../assets/database/categoriesDB";
import { SectionTypes } from "../assets/database/sectionTypes";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";
import { Spinner, Offcanvas } from 'react-bootstrap';
import { IoIosArrowDown } from 'react-icons/io';
export const Header = () => {
  const [sections, setSections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sectionTypes, setSectionTypes] = useState(SectionTypes);
  // Estados para el offCanvas de bootstrap
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setSections(sectionsDB);
    setCategories(categoriesDB);
  }, []);

  return (
    <>
      <div className="bars-container" onClick={handleShow}>
        &#9776;
      </div>
      <div className="header-container">
        <Offcanvas show={show} onHide={handleClose}>
          <div className="header">
            <Offcanvas.Header  >
                <div className="header-top">
                  <div className="close-container" onClick={handleClose} >
                    &times;
                  </div>
                  <div className="header-logo" onClick={handleClose}>
                    <Link to="/">
                      <img src="https://imgs.search.brave.com/siYYlprg8CKMxqTSw4jv8Ma2VnLTdEqOQZqcsh_qQM0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9kb3du/bG9hZC5sb2dvLndp/bmUvbG9nby9Ob2Rl/LmpzL05vZGUuanMt/TG9nby53aW5lLnBu/Zw" />
                    </Link>
                  </div>
                </div>
            </Offcanvas.Header>
            <Offcanvas.Body className="pt-0">
              <div className="header-down">
                {sections && sections.length >= 1 ? (
                  <div className="header-section-container">
                    {
                      SectionTypes.map((type, i)=>(
                        
                        <div key={i}>
                        {/*  Este es el nombre del curso que se muestra */}
                          {/* <p className="header-type">{type.name}</p> */}
                          {/* Esta es la lista sirve para mostrar las secciones con sus categorias */}
                        <ul className="header-section">
                        {//Aqui estamos devolviendo todas las secciones de nuestra base de datos
                      
                          <li className="header-section-type" >
                            
                           { sections.map((section, i) => (
                              type.nameID === section.sectionType ? 
                              <li className="header-section-item" key={section.sectionID || i}>
                              <Link to={"/seccion/" + section.sectionURL} >{section.name} <IoIosArrowDown /></Link>
                              <ul className="h-s-sub-item-container" >
                                {categories.length >= 1 ? //Aqui estamos devolviendo todas categorias de BD para luego compararlos mediante su 'sectionID' y hacer una relacion 
                                  categories.map((category, j) => (
                                    category.sectionInformation.sectionID === section.sectionID ?
                                      <li className="h-s-sub-item" key={category.categoryID || j}><Link to={"/lista-videos/"  + section.sectionURL + "/"+  category.categoryInformation.categoryURL }><i className={category.iconName} style={{ "margin-right": 5 }} ></i>{category.name}</Link></li>
                                      : ''
                                  )) : <div className="text-center"><Spinner animation="border" className="text-white" /></div>
                                }
                              </ul>
                            </li>
                              :''
                          ))
                          }
                            </li>
                          }
                      </ul>
                        </div>
                        
                        ))
                    }
                   
                    
                  </div>
                ) : (
                  <div className="text-center pt-5"><Spinner animation="border" className="text-white" /></div>
                )}
              </div>
            </Offcanvas.Body>
          </div>

        </Offcanvas>
      </div>
    </>
  );
};
