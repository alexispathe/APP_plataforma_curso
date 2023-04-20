import { createContext, useState } from "react";
import {SectionsDB} from '../assets/db/sectionsDB';
export const SectionsContext = createContext(null);

export const SectionsProviders = ({children})=>{
    const [sectionDB, setSectionDB] = useState(SectionsDB);
    return (
        <SectionsContext.Provider value={[sectionDB, setSectionDB]}>{children}</SectionsContext.Provider>
    )
}