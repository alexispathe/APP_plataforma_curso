// Aqui estamos un contexto de la lista de todos los videos para que puedan ser utilizados en cualquier componente de nuestra aplicacion
import {createContext, useState} from 'react';
import { VideoListDB } from '../assets/db/VideoListDB'; //Importamos la lista de los videos de la BD y lo pasamos por el state
export const VideosContext = createContext(null); //Creamos el contexto
                    /*En "children" estamos pasandole a los componentes que le vamos a pasar los valores*/
export const VideosProvider = ({children}) => {
    const [videosDB, setVideosDB] = useState(VideoListDB);
  return (
    <VideosContext.Provider value={[videosDB, setVideosDB]}>{children}</VideosContext.Provider>
    
  )
}
