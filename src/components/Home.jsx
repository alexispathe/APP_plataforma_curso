import '../assets/styles/home.css';
import { VideoContainerComponent } from "./videoComponents/VideoContainerComponent";
import { Search } from './Search';
export const Home =()=>{
    return(
        <div className="home-container">
            <Search/>
            {/* <VideoListComponent/> */}
        </div>
    )
};

