import {Home} from "../components/Home";
import { Section } from "../components/sections/Section";
import { VideoPlayerComponent } from "../components/videoComponents/VideoPlayerComponent";
export const componentPaths = [
    {
        element: <Home/>,
        path: '/'
    },
    {
        element: <Section/>,
        path: '/seccion/:id'
    },
    {
        element: <Section/>,
        path: '/seccion/:id/:id'
    },
    {
        element: <VideoPlayerComponent/>,
        path: '/reproduciendo/:curso/:id'
    }
];
