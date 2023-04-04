import { VideoListComponent } from "./VideoListComponent";
import { useState } from "react";
export const Home =()=>{
    // En estas variables se guardan los ID de todos los videos del canal de youtube, se mandaran como "props" dentro de "VideoListComponenet"
    const [videoYTID, setVideoYTID] = useState([]); 
    return(
        <div className="container">
            <h1>Home</h1>
            <VideoListComponent videoYTID={videoYTID} setVideoYTID={setVideoYTID}/>
        </div>
    )
};

