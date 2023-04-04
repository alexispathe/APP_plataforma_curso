import { VideoListComponent } from "./VideoListComponent";
export const Home =()=>{
    // En estas variables se guardan los ID de todos los videos del canal de youtube, se mandaran como "props" dentro de "VideoListComponenet"
    return(
        <div className="container">
            <h1>Home</h1>
            <VideoListComponent/>
        </div>
    )
};

