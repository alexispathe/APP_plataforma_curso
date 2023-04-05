import {Home} from "../components/Home";
import { Section } from "../components/sections/Section";
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
    }
];
