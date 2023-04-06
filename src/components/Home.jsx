import '../assets/styles/home.css';
import { VideoListComponent } from "./VideoListComponent";
import { Search } from './Search';
export const Home =()=>{
    return(
        <div className="home-container">
            <Search/>
            {/* <VideoListComponent/> */}
        </div>
    )
};

