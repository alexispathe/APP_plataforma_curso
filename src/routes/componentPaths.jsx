import {Home} from "../components/Home";
import { VideoPlayerComponent } from "../components/videoComponents/VideoPlayer";
import { Error } from "../components/Error";
import { CourseVideoList } from "../components/videoComponents/CourseVideoList";
export const componentPaths = [
    {
        element: <Home/>,
        path: '/'
    },
    {
        element: <CourseVideoList/>,
        path: '/lista-videos/:section/:course'
    },
    {
        element: <VideoPlayerComponent/>,
        path: '/reproduciendo/:section/:title'
    },
    {
        element: <Error/>,
        path: '*'
    }
];
