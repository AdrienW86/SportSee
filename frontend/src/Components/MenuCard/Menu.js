import React , {useEffect }from 'react';
import useFetch from '../../Services/useFetch'
import Card from '../../Components/Card/Card';
import Proteine from '../../assets/protein-icon.svg'
import Calories from '../../assets/calories-icon.svg'
import Glucides from '../../assets/carbs-icon.svg'
import Lipides from '../../assets/fat-icon.svg'

function Menu() {

const [{response, error, isLoading}, doFetch] = useFetch("http://localhost:3000/user/18")
 
useEffect(()=> {
    
    console.log(response, error, isLoading)
      doFetch()

      if(isLoading === true) {
        alert(error)
      }
  },[doFetch])

  return (
    <>
        <Card 
            cover = {Calories}
            number = {response.data.keyData.calorieCount}
            unit = "Calories"
        />
        <Card 
            cover = {Proteine}
            number = {response.data.keyData.proteinCount}
            unit = "Proteines"
        />
        <Card 
            cover = {Glucides}
            number = {response.data.keyData.carbohydrateCount}
            unit = "Glucides"
        />
        <Card 
            cover = {Lipides}
            number = {response.data.keyData.lipidCount}
            unit = "Lipides"
        /> 
    </>
  )
}
export default Menu