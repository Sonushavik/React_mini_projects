import { children, createContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({children}) => {
        const myName = "Sonu";
        const myAge = "20"
        const add = "Muzaffarpur, Bihar"

        return(
                <BioContext.Provider value={{myName, myAge, add}}>
                        {children}
                </BioContext.Provider>
        )
}