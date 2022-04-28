import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios';

export const ActivityContext = createContext();

const ActivityContextProvider = props => {
    const [data, setData] = useState()

    const getAlldatas = () => {
        axios.get("http://localhost:3000/user/18/activity")
            .then(response => {
               setData(response.data.data.sessions)        
            })   
    }  
    useEffect(() => {
        getAlldatas()
    },[])

    return <ActivityContext.Provider value={{data}}>
                {props.children}
           </ActivityContext.Provider>
}

export default ActivityContextProvider