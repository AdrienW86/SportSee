import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios';

export const FirstNameContext = createContext();

const FirstNameContextProvider = props => {
    const [data, setData] = useState()

    const getAlldatas = () => {
        axios.get("http://localhost:3000/user/18")
            .then(response => {
               setData(response.data.data.userInfos.firstName)        
            })   
    }  
    useEffect(() => {
        getAlldatas()
    },[])

    return <FirstNameContext.Provider value={{data}}>
                {props.children}
           </FirstNameContext.Provider>
}

export default FirstNameContextProvider