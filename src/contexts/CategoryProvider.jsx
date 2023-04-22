// Aqui se crea el contexto para las categorias de la app
import { createContext, useState } from "react";
import {categoriesDB} from '../assets/database/categoriesDB';
export const CategoryContext = createContext(null);

export const CategoryProvider = ({children})=>{
    const [categoriesDb, setCategoriesDb] = useState(categoriesDB);
    return (
        <CategoryContext.Provider value={[categoriesDb, setCategoriesDb]}>{children}</CategoryContext.Provider>
    )
}