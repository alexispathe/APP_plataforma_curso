import '../assets/styles/home.css';
import { VideoContainerComponent } from "./videoComponents/VideoContainerComponent";
import { Search } from './Search';
import { WatchedVideoComponent } from './videoComponents/WatchedVideoComponent';
import { useEffect, useState } from 'react';
export const Home =()=>{
    const [status, setStatus] = useState(false);
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
        <div className="home-container">
            <Search/>
            {/* <VideoListComponent/> */}
            {status? <WatchedVideoComponent/> :''}
            
        </div>
    )
};

