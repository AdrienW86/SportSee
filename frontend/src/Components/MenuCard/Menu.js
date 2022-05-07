import { useParams } from 'react-router';
import { UseFetch } from '../../Services/useFetch';
import { getKeyDatas } from '../../Services/user';
import { userInfos } from '../../mocked-data'
import { mockedGetKeyDatas } from '../../Services/mocked-user'
import Card from '../../Components/Card/Card';
import Proteine from '../../assets/protein-icon.svg'
import Calories from '../../assets/calories-icon.svg'
import Glucides from '../../assets/carbs-icon.svg'
import Lipides from '../../assets/fat-icon.svg'

function Menu() {
    let user
    const params = useParams()
    const id = parseInt(params.id)

    user = UseFetch(`http://localhost:3000/user/${id}`,getKeyDatas )

    if(user === undefined) {
        user = mockedGetKeyDatas(userInfos, id)
    }

  return (
    <>
        <Card 
            cover = {Calories}
            number = {user.calorieCount}
            unit = "Calories"
        />
        <Card 
            cover = {Proteine}
            number = {user.proteinCount}
            unit = "Proteines"
        />
        <Card 
            cover = {Glucides}
            number = {user.carbohydrateCount}
            unit = "Glucides"
        />
        <Card 
            cover = {Lipides}
            number = {user.lipidCount}
            unit = "Lipides"
        /> 
    </>
  )
}
export default Menu