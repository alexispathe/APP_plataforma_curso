import { createContext, useState } from "react";
import {sectionsDB} from '../assets/db/sectionsDB';
export const SectionsContext = createContext(null);

export const SectionsProvider = ({children})=>{
    const [sectionDB, setSectionDB] = useState(sectionsDB);
    return (
        <SectionsContext.Provider value={[sectionDB, setSectionDB]}>{children}</SectionsContext.Provider>
    )
}