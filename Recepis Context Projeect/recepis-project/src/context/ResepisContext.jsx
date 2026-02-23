import { createContext, useState } from "react"


export const recepiscontext = createContext({data: []})

const ResepisContext = (props) => {

    const [data, setdata] = useState([])
    console.log(data);
    
    
    return (
        <recepiscontext.Provider value={{ data, setdata }}>
            {props.children}
        </recepiscontext.Provider>
    )
}

export default ResepisContext