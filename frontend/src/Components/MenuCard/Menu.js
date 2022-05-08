import PropTypes from 'prop-types';
import Card from '../../Components/Card/Card';
import Proteine from '../../assets/protein-icon.svg'
import Calories from '../../assets/calories-icon.svg'
import Glucides from '../../assets/carbs-icon.svg'
import Lipides from '../../assets/fat-icon.svg'

function Menu(props) {
  return (
    <>
        <Card 
            cover = {Calories}
            number = {props.infos.calorieCount}
            unit = "Calories"
        />
        <Card 
            cover = {Proteine}
            number = {props.infos.proteinCount}
            unit = "Proteines"
        />
        <Card 
            cover = {Glucides}
            number = {props.infos.carbohydrateCount}
            unit = "Glucides"
        />
        <Card 
            cover = {Lipides}
            number = {props.infos.lipidCount}
            unit = "Lipides"
        /> 
    </>
  )
}
Menu.propTypes = {
    calorieCount : PropTypes.string,
    unit: PropTypes.string
  }
export default Menu