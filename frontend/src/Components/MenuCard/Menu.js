import React , {useContext }from 'react';
import { UserContext } from '../../Services/user-profil';
import Card from '../../Components/Card/Card';
import Proteine from '../../assets/protein-icon.svg'
import Calories from '../../assets/calories-icon.svg'
import Glucides from '../../assets/carbs-icon.svg'
import Lipides from '../../assets/fat-icon.svg'

function Menu() {

 const {calories, proteines, glucides, lipides} = useContext(UserContext)
 // console.log(data)
  console.log(calories)

  return (
    <>
        <Card 
            cover = {Calories}
            number = {calories}
            unit = "Calories"
        />
        <Card 
            cover = {Proteine}
            number = {proteines}
            unit = "Proteines"
        />
        <Card 
            cover = {Glucides}
            number = {glucides}
            unit = "Glucides"
        />
        <Card 
            cover = {Lipides}
            number = {lipides}
            unit = "Lipides"
        />
    </>
  )
}
export default Menu