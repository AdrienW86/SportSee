import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios';

export const PerformanceContext = createContext();

const PerformanceContextProvider = props => {

    const [data, setData] = useState()
    const getAlldatas = () => {

        axios.get("http://localhost:3000/user/18/performance")
            .then(response => {  

                let values = response.data.data.data.map(el => el.value)
                let titles = Object.values(response.data.data.kind)
                let array = []
                let i = 0;

                    do {                                   
                        array.push({title: titles[i], value: values[i]})
                        i +=1  
                    } while (i < titles.length)
                   
               setData(array)               
            })   
    }  
    useEffect(() => {
        getAlldatas()
    },[])

    return <PerformanceContext.Provider value={{data}}>
                {props.children}
           </PerformanceContext.Provider>
}

export default PerformanceContextProvider