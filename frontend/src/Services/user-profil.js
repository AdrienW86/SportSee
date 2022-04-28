import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios';

export const UserContext = createContext();


const UserInfosContextProvider = props => {
    const [firstName, setFirstName] = useState()
    const [score, setScore] = useState()
    const [todayScore, setTodayScore] = useState()
    const [calories, setCalories] = useState()
    const [proteines, setProteines] = useState()
    const [glucides, setGlucides] = useState()
    const [lipides, setLipides] = useState()


    const getAlldatas = () => {
        axios.get("http://localhost:3000/user/12")
            .then(response => {
               setFirstName(response.data.data.userInfos.firstName) 
               setScore(response.data.data.score) 
               setTodayScore(response.data.data.todayScore)
               setCalories(response.data.data.keyData.calorieCount) 
               setProteines(response.data.data.keyData.proteinCount)    
               setGlucides(response.data.data.keyData.carbohydrateCount)
               setLipides(response.data.data.keyData.lipidCount)    
            })   
    }  
    useEffect(() => {
        getAlldatas()
    },[])

    return <UserContext.Provider value={{firstName, score,todayScore, calories, proteines, glucides, lipides}}>
                {props.children}
           </UserContext.Provider>
}

export default UserInfosContextProvider