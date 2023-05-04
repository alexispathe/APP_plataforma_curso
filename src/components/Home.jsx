import { useEffect, useState } from 'react';
import '../assets/styles/home.css';
import { Search } from './Search';
import { WatchedVideoComponent } from './videoComponents/WatchedVideo';
import { Section } from './sections/Section';
import { SectionTypes } from '../assets/database/sectionTypes';//devolvemos el tipo de secciones que hay
export const Home =()=>{
    const [status, setStatus] = useState(false);
    const [sectionTypes, setSectionTypes] = useState(SectionTypes);
    useEffect(()=>{
        showComponent();
    },[])
    const showComponent =()=>{
        /*Esta funcion sirve para mostrar el componente del video visto por el usuario, en caso que exista */ 
        if(localStorage.getItem('watched-videos')){
            setStatus(true);
        }
    }
    return(
        <>
        <div className="container mt-3">
            <Search title="¿Que estas buscando?"/>
            {sectionTypes && sectionTypes.length >= 1? 
                sectionTypes.map((type, i)=>(
                <Section sectionType={type.nameID} name={type.name} key={i} />
                ))
            : ''
            }
        </div>
        {status? <WatchedVideoComponent/> :''}
        </>
    )
};

